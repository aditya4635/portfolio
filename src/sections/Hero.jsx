import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import CanvasLoader from '../components/Loading.jsx';
import HeroGeometry from '../components/HeroGeometry.jsx';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  useGSAP(() => {
    gsap.fromTo('.hero-text', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroGeometry scale={isSmall ? 1.5 : isMobile ? 2 : 3} position={isSmall ? [0, 0, 0] : isMobile ? [0, 0, 0] : [4, 0, 0]} />

            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#7c3aed" />
            <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />
            
            <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-start c-space gap-6 sm:gap-8 z-10 relative px-5 sm:px-10 pt-40 sm:pt-32 md:pt-0 min-h-screen pointer-events-none">
        <div className="pointer-events-auto">
          <p className="hero-text text-3xl sm:text-5xl md:text-6xl font-bold !text-black dark:!text-white font-generalsans text-left tracking-tight">
            Hi, I am Aditya
          </p>
          <p className="hero-text text-lg sm:text-xl md:text-2xl text-gray_gradient text-left font-medium mt-2">
            Building Products & Brands
          </p>
          
          <div className="w-full mt-8">
            <a href="#about" className="w-fit">
              <button className="btn btn-primary sm:w-fit w-full sm:min-w-96 text-base sm:text-lg font-semibold min-h-[48px]">
                Let's work together
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
