import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useClipboard } from '../hooks/useClipboard.js';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const email = 'adityarajbhandari1020@gmail.com';
  const { hasCopied, handleCopy } = useClipboard();

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
        <div className="text-center mb-10 md:mb-14">
          <h2 className="head-text">About Me</h2>
          <p className="text-gray-600 dark:text-white-500 mt-3 text-base md:text-lg">Get to know me better</p>
        </div>

        <div className="grid-container">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-6 md:py-8">

            <div className="flex-shrink-0">
              <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl shadow-accent/10">
                <img
                  src="assets/photo.png"
                  alt="Aditya Raj Bhandari"
                  loading="lazy"
                  width="240"
                  height="240"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 flex-1">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-generalsans">
                  Aditya Raj Bhandari
                </h3>
                <p className="text-lg md:text-xl text-accent font-medium">
                  Full-Stack Developer
                </p>
              </div>

              <div className="space-y-3 max-w-2xl">
                <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-white-600 leading-relaxed">
                  I&apos;m a passionate full-stack developer specializing in creating dynamic and responsive web applications
                  that deliver exceptional user experiences. With expertise in modern technologies like
                  <span className="font-semibold text-accent"> TypeScript</span>,
                  <span className="font-semibold text-accent"> React</span>,
                  <span className="font-semibold text-accent"> Node.js</span>, and
                  <span className="font-semibold text-accent"> Next.js</span>,
                  I bring ideas to life through clean, scalable code.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-white-600 leading-relaxed">
                  Based in <span className="font-semibold">Delhi, India</span>, I&apos;m open to remote work opportunities
                  and passionate about solving complex problems through innovative solutions.
                </p>
              </div>

              <div className="w-full max-w-sm md:max-w-md pt-4 border-t border-black-300/20 dark:border-white-800/10">
                <div className="space-y-3">
                  <p className="text-base font-semibold text-gray-900 dark:text-white">Let&apos;s Connect</p>
                  <div
                    className="flex items-center justify-center md:justify-start gap-3 p-3 md:p-4 rounded-xl bg-neutral-100 dark:bg-black-300/60 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all cursor-pointer group border border-black-300/20 dark:border-white-800/10"
                    onClick={() => handleCopy(email)}
                  >
                    <img
                      src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                      alt="copy"
                      className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110 flex-shrink-0"
                    />
                    <p className="text-xs md:text-sm font-medium text-gray-700 dark:text-white group-hover:text-accent transition-colors break-all">
                      {email}
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
      </div>
    </section>
  );
};

export default About;
