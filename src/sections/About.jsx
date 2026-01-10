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
      <div className="max-w-6xl mx-auto">
        {}
        <div className="text-center mb-12">
          <h2 className="head-text">About Me</h2>
          <p className="text-gray-600 dark:text-white-500 mt-4 text-lg">Get to know me better</p>
        </div>

        {}
        <div className="grid-container">
          <div className="flex flex-col items-center text-center space-y-8 py-8">
            {}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-violet-500/20 shadow-xl shadow-violet-500/10">
              <img 
                src="assets/photo.png" 
                alt="Aditya Raj Bhandari" 
                className="w-full h-full object-cover"
              />
            </div>

            {}
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-generalsans">
                Aditya Raj Bhandari
              </h3>
              <p className="text-xl md:text-2xl text-violet-500 font-medium">
                Full-Stack Developer
              </p>
            </div>

            {}
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg text-gray-700 dark:text-white-600 leading-relaxed">
                I'm a passionate full-stack developer specializing in creating dynamic and responsive web applications 
                that deliver exceptional user experiences. With expertise in modern technologies like 
                <span className="font-semibold text-violet-500"> TypeScript</span>,
                <span className="font-semibold text-violet-500"> React</span>,
                <span className="font-semibold text-violet-500"> Node.js</span>, and
                <span className="font-semibold text-violet-500"> Next.js</span>, 
                I bring ideas to life through clean, scalable code.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-white-600 leading-relaxed">
                Based in <span className="font-semibold">Delhi, India</span>, I'm open to remote work opportunities 
                and passionate about solving complex problems through innovative solutions.
              </p>
            </div>

            {}
            <div className="w-full max-w-md pt-6 border-t border-black-300/20 dark:border-white-800/10">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Let's Connect</p>
                <div 
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 hover:from-violet-500/20 hover:to-cyan-500/20 transition-all cursor-pointer group"
                  onClick={handleCopy}
                >
                  <img 
                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                    alt="copy" 
                    className="w-5 h-5 transition-transform group-hover:scale-110" 
                  />
                  <p className="text-sm md:text-base font-medium text-gray-700 dark:text-white group-hover:text-violet-500 transition-colors break-all">
                    adityarajbhandari1020@gmail.com
                  </p>
                </div>
                {hasCopied && (
                  <p className="text-sm text-green-500 font-medium">✓ Email copied to clipboard!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
