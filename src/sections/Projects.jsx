import { myProjects } from '../constants/index.js';
import ProjectsCanvas from '../components/ProjectsCanvas.jsx';

const Projects = () => {
  return (
    <section className="c-space" id="work">
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <h2 className="head-text">My Selected Work</h2>
        <ProjectsCanvas />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/90 dark:bg-black-200/50 backdrop-blur-xl rounded-2xl border border-gray-300/50 dark:border-white-800/10 p-5 shadow-lg hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-5">
              <img
                src={project.spotlight}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                <img src={project.logo} alt="logo" className="w-6 h-6" />
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-grow">
              <h3 className="text-black dark:text-white text-xl font-semibold group-hover:text-violet-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-white-600 leading-relaxed line-clamp-3">
                {project.desc}
              </p>

              <div className="flex items-center gap-3 mt-2">
                {project.tags.map((tag, i) => (
                  <div key={i} className="w-8 h-8 rounded-md p-1.5 bg-neutral-100 dark:bg-black-300 border border-black-300/20 dark:border-white-800/10 flex justify-center items-center" title={tag.name}>
                    <img src={tag.path} alt={tag.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-black-300/20 dark:border-white-800/10">
              <a
                className="flex items-center justify-between cursor-pointer text-gray-600 dark:text-white-500 hover:text-cyan-500 transition-colors w-full"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-medium">Check Live Site</span>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-4 h-4 invert-0 dark:invert" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
