import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Edges } from '@react-three/drei';

const CyberCube = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1}>
      <group {...props} dispose={null}>
        {}
        <mesh
          ref={meshRef}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          scale={hovered ? 1.1 : 1}
        >
          <boxGeometry args={[2, 2, 2]} />
          <meshPhysicalMaterial
            color="#050505"
            roughness={0.1}
            metalness={0.9}
            transmission={0.5}
            thickness={2}
            transparent
            opacity={0.8}
          />
          <Edges
            scale={1}
            threshold={15} 
            color={hovered ? "#7c3aed" : "#06b6d4"}
          />
        </mesh>

        {}
        <mesh scale={0.5}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color={hovered ? "#06b6d4" : "#7c3aed"} wireframe />
        </mesh>
        
        {}
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
           <torusGeometry args={[1.8, 0.02, 16, 100]} />
           <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
};

export default CyberCube;
