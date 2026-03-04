import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import HeroCanvas from '../components/HeroCanvas.jsx';
import { ActionLink } from '../components/Button.jsx';

const Hero = () => {

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
    <section className="h-screen w-full flex flex-col relative" id="home">
      <div className="w-full h-[150vh] absolute inset-0 z-0 pointer-events-none">
        <HeroCanvas />
      </div>

      <div className="w-full h-full flex flex-col justify-center items-start c-space gap-6 sm:gap-8 z-10 relative pt-36 sm:pt-28 md:pt-0 pointer-events-none">
        <div className="pointer-events-auto w-full md:w-1/2 lg:w-[45%]">
          <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !text-black dark:!text-white font-generalsans text-left tracking-tight leading-tight">
            Hi, I am Aditya
          </h1>
          <p className="hero-text text-base sm:text-lg md:text-xl text-gray_gradient text-left font-medium mt-3 md:mt-4">
            I build modern web applications using <span className="font-semibold text-black dark:text-white">TypeScript</span>, <span className="font-semibold text-black dark:text-white">React</span>, <span className="font-semibold text-black dark:text-white">Node.js</span>, <span className="font-semibold text-black dark:text-white">Express</span>, <span className="font-semibold text-black dark:text-white">PostgreSQL</span>, and <span className="font-semibold text-black dark:text-white">Next.js</span>. <br />
            My focus is on <span className="bg-yellow-300 dark:bg-yellow-400/80 px-1 text-black font-medium">crafting clean</span>, thoughtful frontends and designing backend systems that are <span className="bg-yellow-300 dark:bg-yellow-400/80 px-1 text-black font-medium">scalable</span>, reliable, and easy to maintain. <br />
            <span className="block mt-4 bg-blue-200 dark:bg-blue-500/30 px-2 py-1 rounded text-gray-800 dark:text-blue-100 w-fit">Open to work, freelance and collaborations!</span>
          </p>

          <div className="mt-6 md:mt-8">
            <ActionLink href="#about" className="bg-violet-600 sm:w-fit w-full sm:min-w-48 md:min-w-56 min-h-[48px] justify-center text-base sm:text-lg hover:bg-violet-700">
              Let&apos;s work together
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
