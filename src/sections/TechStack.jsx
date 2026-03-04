import { useRef } from 'react';
import { technologies } from '../constants/index.js';
import '../components/TechStack.css';

const row1 = technologies.slice(0, 12);
const row2 = technologies.slice(12);

const TechItem = ({ tech }) => (
  <div className="tech-box flex-shrink-0 mx-2 sm:mx-4 bg-white/80 dark:bg-black-200/50 backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6
                  border border-gray-300/40 dark:border-white-800/10
                  hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20
                  transition-all duration-300 hover:scale-110
                  w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col items-center justify-center gap-2 md:gap-3">
    <div className="w-16 h-16 flex items-center justify-center relative">
      <img 
        src={tech.icon} 
        alt={tech.name}
        className="w-full h-full object-contain filter dark:brightness-90 absolute inset-0"
        onError={(e) => {
          e.target.style.display = 'none';
          if(e.target.nextElementSibling) {
            e.target.nextElementSibling.style.display = 'flex';
          }
        }}
      />
      <div className="hidden w-full h-full bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg items-center justify-center text-white font-bold text-2xl absolute inset-0">
        {tech.name.charAt(0)}
      </div>
    </div>
    
    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
      {tech.name}
    </span>
  </div>
);

const TechStack = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  return (
    <section className="my-20 overflow-hidden" id="tech">
      <div className="c-space">
        <h2 className="head-text">Tools and Technology</h2>
        <p className="text-gray-700 dark:text-white-600 mt-4 text-lg mb-12">
          Comprehensive tech stack I use to build modern, scalable applications
        </p>
      </div>

      <div className="scroll-container scroll-right mb-8" ref={row1Ref}>
        <div className="scroll-content flex">
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <TechItem key={`row1-${index}`} tech={tech} />
          ))}
        </div>
      </div>

      <div className="scroll-container scroll-left" ref={row2Ref}>
        <div className="scroll-content flex">
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <TechItem key={`row2-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
