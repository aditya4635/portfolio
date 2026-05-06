import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

import CanvasLoader from './Loading.jsx';
import HeroGeometry from './HeroGeometry.jsx';
import { useMediaQuery } from 'react-responsive';

/** Watches the <html> dark class and returns the correct page bg color */
function usePageBg() {
  const [bg, setBg] = useState(() =>
    document.documentElement.classList.contains('dark') ? '#080808' : '#f8f8f8'
  );

  useEffect(() => {
    const el = document.documentElement;
    const observer = new MutationObserver(() => {
      setBg(el.classList.contains('dark') ? '#080808' : '#f8f8f8');
    });
    observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return bg;
}

const HeroCanvas = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const bgColor = usePageBg();

  return (
    <Canvas
      className="w-full h-full"
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl }) => gl.setClearColor(bgColor, 1)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

        {/* Reactive scene background — matches page theme */}
        <color attach="background" args={[bgColor]} />

        <HeroGeometry
          scale={isSmall ? 1.5 : isMobile ? 2 : 3}
          position={isSmall || isMobile ? [0, 0, 0] : [4, 0, 0]}
        />

        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />

        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
