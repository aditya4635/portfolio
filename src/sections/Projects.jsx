import { myProjects } from '../constants/index.js';

const Projects = () => {
  return (
    <section className="c-space" id="work">
      <div className="mb-8 md:mb-12">
        <h2 className="head-text">My Selected Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/90 dark:bg-black-200/50 backdrop-blur-xl rounded-2xl border border-gray-300/50 dark:border-white-800/10 p-5 shadow-lg hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-5">
              <img
                src={project.spotlight}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                <img src={project.logo} alt="logo" className="w-6 h-6" />
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-grow">
              <h3 className="text-black dark:text-white text-xl font-semibold group-hover:text-accent transition-colors">
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

            <div className="mt-5 pt-5 border-t border-black-300/20 dark:border-white-800/10 flex items-center justify-between gap-3">
              {project.github && (
                <a
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-white-500 hover:text-violet-500 transition-colors"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="flex-shrink-0">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
              )}
              <a
                className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-white-500 hover:text-accent transition-colors ml-auto"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>Live Site</span>
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
