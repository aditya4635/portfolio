import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Leva } from 'leva';

import CanvasLoader from './Loading.jsx';
import HeroGeometry from './HeroGeometry.jsx';
import { useMediaQuery } from 'react-responsive';

const HeroCanvas = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <Leva hidden />
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

        <HeroGeometry 
          scale={isSmall ? 1.5 : isMobile ? 2 : 3} 
          position={isSmall || isMobile ? [0, 0, 0] : [4, 0, 0]} 
        />

        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#7c3aed" />
        <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />
        
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
