import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if(meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          ior={1.5}
          thickness={0.5}
          envMapIntensity={2}
          clearcoat={1}
          wireframe={true}
        />
      </mesh>
      <mesh scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function Particles({ count = 100 }) {
  const meshRef = useRef();
  const dummy = new THREE.Object3D();
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({ t: Math.random() * 100, factor: 20 + Math.random() * 100, speed: 0.01 + Math.random() / 200, xFactor: -20 + Math.random() * 40, yFactor: -20 + Math.random() * 40, zFactor: -20 + Math.random() * 40, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if(!meshRef.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s * 0.1, s * 0.1, s * 0.1);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
    </instancedMesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0284c7" />
        <AbstractShape />
        <Particles count={150} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}