import { useState } from 'react';
import Globe from 'react-globe.gl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../components/Button.jsx';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('adityarajbhandari1020@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useGSAP(() => {
    gsap.from('.grid-container', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
      },
    });
  });

  return (
    <section className="c-space" id="about">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Large Profile Card - Takes 2 columns */}
        <div className="xl:col-span-2 md:col-span-2">
          <div className="grid-container h-full flex flex-col">
            <div className="w-full h-[240px] flex items-center justify-center bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-xl mb-5">
              <img src="assets/photo.png" alt="grid-1" className="w-auto h-full object-contain opacity-90" />
            </div>
            <div className="space-y-4 flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-generalsans">
                Hi, I'm Aditya Raj Bhandari
              </h2>
              <p className="text-base text-gray-700 dark:text-white-600 leading-relaxed">
                Full-stack developer specializing in creating dynamic and responsive websites that deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Card - Square shape */}
        <div className="xl:col-span-1 md:col-span-1">
          <div className="grid-container h-full flex flex-col">
            <div className="flex-grow flex items-center justify-center mb-4">
              <img src="assets/grid2.png" alt="grid-2" className="w-full h-[160px] object-contain opacity-80" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-generalsans">Tech Stack</h3>
              <p className="text-sm text-gray-700 dark:text-white-600 leading-relaxed">
                Modern frameworks & cutting-edge tools
              </p>
            </div>
          </div>
        </div>

        {/* Contact Email Card - Compact */}
        <div className="xl:col-span-1 md:col-span-1">
          <div className="grid-container h-full flex flex-col justify-between">
            <div className="flex-grow flex items-center justify-center mb-4">
              <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-full h-[120px] object-cover rounded-xl opacity-80"
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700 dark:text-white-600 text-center">Get in touch</p>
              <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="transition-transform group-hover:scale-110 w-5 h-5" />
                <p className="text-xs font-medium text-gray-600 dark:text-white group-hover:text-violet-500 transition-colors text-center break-all px-2">
                  adityarajbhandari1020@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Passion Card - Wide horizontal */}
        <div className="xl:col-span-3 md:col-span-2">
          <div className="grid-container py-6 px-8">
            <div className="flex md:flex-row flex-col gap-6 items-center">
              <div className="md:w-2/5 w-full flex items-center justify-center">
                <div className="rounded-2xl w-full h-[180px] flex justify-center items-center bg-gradient-to-br from-violet-500/10 to-cyan-500/10">
                  <div className="text-7xl">🌍</div>
                </div>
              </div>
              <div className="md:w-3/5 w-full space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-generalsans">
                  Flexible & Remote
                </h3>
                <p className="text-base text-gray-700 dark:text-white-600 leading-relaxed">
                  Based in Delhi, India. Open to remote work opportunities worldwide.
                </p>
                <a href="#contact" className="inline-block">
                  <Button name="Contact Me" isBeam containerClass="mt-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location/Remote Work Card - Tall vertical */}
        <div className="xl:col-span-1 md:col-span-2">
          <div className="grid-container h-full flex flex-col justify-between">
            <div className="flex-grow flex items-center justify-center mb-5">
              <img src="assets/grid3.png" alt="grid-3" className="w-full h-[220px] object-contain opacity-80" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-generalsans">
                My Passion for Coding
              </h3>
              <p className="text-sm text-gray-700 dark:text-white-600 leading-relaxed">
                I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
