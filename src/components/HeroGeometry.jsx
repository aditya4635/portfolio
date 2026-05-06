import { useRef, useState, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Float, useCursor } from '@react-three/drei';
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
          scale={1}
        >
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial 
            map={earthTexture}
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>



        {/* Delhi location marker — emerald */}
        <mesh ref={markerRef} position={delhiPosition}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Marker stem — emerald */}
        <mesh position={[delhiPosition[0], delhiPosition[1] + 0.15, delhiPosition[2]]}>
          <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
          <meshStandardMaterial 
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Orbit ring — hairline, near-transparent */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.5, 0.015, 16, 100]} />
          <meshStandardMaterial color="#888888" transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  );
};

export default HeroGeometry;
