import { useRef } from 'react';

const technologies = [
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  
  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  
  // Database
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  
  // DevOps & Tools
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  
  // Cloud & Services
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
];

// Split technologies into two rows
const row1 = technologies.slice(0, 12);
const row2 = technologies.slice(12);

const TechItem = ({ tech }) => (
  <div className="tech-box flex-shrink-0 mx-4 bg-white/80 dark:bg-black-200/50 backdrop-blur-md rounded-xl p-6
                  border border-gray-300/40 dark:border-white-800/10
                  hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20
                  transition-all duration-300 hover:scale-110
                  w-40 h-40 flex flex-col items-center justify-center gap-3">
    <div className="w-16 h-16 flex items-center justify-center">
      <img 
        src={tech.icon} 
        alt={tech.name}
        className="w-full h-full object-contain filter dark:brightness-90"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="hidden w-full h-full bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg items-center justify-center text-white font-bold text-xl">
        {tech.name[0]}
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
        <p className="head-text">Tools and Technology</p>
        <p className="text-gray-700 dark:text-white-600 mt-4 text-lg mb-12">
          Comprehensive tech stack I use to build modern, scalable applications
        </p>
      </div>

      {/* Conveyor Belt Styles */}
      <style jsx="true">{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-container:hover .scroll-content {
          animation-play-state: paused;
        }

        .scroll-right .scroll-content {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-left .scroll-content {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>

      {/* Row 1 - Scrolling Right */}
      <div className="scroll-container scroll-right mb-8" ref={row1Ref}>
        <div className="scroll-content flex">
          {/* Duplicate items for seamless loop */}
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <TechItem key={`row1-${index}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Left */}
      <div className="scroll-container scroll-left" ref={row2Ref}>
        <div className="scroll-content flex">
          {/* Duplicate items for seamless loop */}
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <TechItem key={`row2-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
