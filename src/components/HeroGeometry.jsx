import { useRef, useState, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Float, useCursor, Html } from '@react-three/drei';
import * as THREE from 'three';

const HeroGeometry = (props) => {
  const groupRef = useRef();
  const earthRef = useRef();
  const markerRef = useRef();
  const [hovered, setHover] = useState(false);
  
  useCursor(hovered);

  
  const earthTexture = useLoader(THREE.TextureLoader, '/textures/earth-day.jpg');
  
  
  
  const delhiPosition = useMemo(() => {
    const lat = 28.6139 * (Math.PI / 180);
    const lon = 77.2090 * (Math.PI / 180);
    const radius = 1.5;
    
    const x = radius * Math.cos(lat) * Math.cos(lon);
    const y = radius * Math.sin(lat);
    const z = -radius * Math.cos(lat) * Math.sin(lon);
    
    return [x, y, z];
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
    
    
    if (markerRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      markerRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1}>
      <group ref={groupRef} {...props} dispose={null}>
        {}
        <mesh 
          ref={earthRef}
          onPointerOver={() => setHover(true)} 
          onPointerOut={() => setHover(false)}
          scale={hovered ? 1.05 : 1}
        >
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial 
            map={earthTexture}
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        {}
        <mesh scale={1.52}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshBasicMaterial 
            color="#4da6ff"
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </mesh>

        {}
        <mesh ref={markerRef} position={delhiPosition}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={2}
          />
        </mesh>

        {}
        <mesh position={[delhiPosition[0], delhiPosition[1] + 0.15, delhiPosition[2]]}>
          <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
          <meshStandardMaterial 
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={1.5}
          />
        </mesh>

        {}
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

        {}
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
