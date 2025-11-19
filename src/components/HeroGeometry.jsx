import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei';
import * as THREE from 'three';

const HeroGeometry = (props) => {
  const groupRef = useRef();
  const [hovered, setHover] = useState(false);
  
  useCursor(hovered);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1}>
      <group ref={groupRef} {...props} dispose={null}>
        {/* Central Core */}
        {/* Central Core */}
        <mesh 
          onPointerOver={() => setHover(true)} 
          onPointerOut={() => setHover(false)}
          scale={hovered ? 1.1 : 1}
        >
          <dodecahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial 
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
            roughness={0.05}
            metalness={1}
            transmission={0.6}
            thickness={2}
            envMapIntensity={3}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh scale={1.8} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            wireframe 
            transparent 
            opacity={0.3} 
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Orbiting Rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.5, 0.05, 16, 100]} />
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={1} />
        </mesh>
        
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[4, 0.05, 16, 100]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={1} />
        </mesh>

        <mesh rotation={[-Math.PI / 3, -Math.PI / 6, 0]}>
          <torusGeometry args={[4.5, 0.05, 16, 100]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
        </mesh>
      </group>
    </Float>
  );
};

export default HeroGeometry;
