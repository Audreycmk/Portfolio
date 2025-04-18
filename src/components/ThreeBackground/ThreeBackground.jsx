import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScrollPosition } from './ScrollPosition';

const Particles = ({ count, mouse, scrollY }) => {
  const mesh = useRef(null);
  const { viewport } = useThree();

  useEffect(() => {
    if (!mesh.current) return;

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;

      dummy.position.set(x, y, z);
      const scale = Math.random() * 0.2 + 0.05;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;

    const time = Date.now() * 0.001;
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      mesh.current.getMatrixAt(i, dummy.matrix);
      dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

      const angle = time * (0.1 + i * 0.0001) + i * 0.1;
      const scrollFactor = scrollY * 0.002;

      dummy.position.y -= Math.sin(angle) * 0.01 + scrollFactor * 0.05;
      if (dummy.position.y < -5) dummy.position.y = 5;

      dummy.rotation.x = Math.sin(time * 0.7) * 0.01;
      dummy.rotation.y = Math.cos(time * 0.7) * 0.01;

      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#8B5CF6" transparent opacity={0.6} />
    </instancedMesh>
  );
};

const Scene = () => {
  const mousePosition = useRef(new THREE.Vector2(0, 0));
  const scrollY = useScrollPosition();

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <Particles count={100} mouse={mousePosition} scrollY={scrollY} />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  );
};

export default ThreeBackground;
