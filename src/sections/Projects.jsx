import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import CyberCube from '../components/CyberCube.jsx';

const Projects = () => {
  return (
    <section className="c-space" id="work">
      <div className="flex justify-between items-center mb-12">
        <p className="head-text">My Selected Work</p>
        <div className="h-20 w-20 hidden sm:block">
             <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <CyberCube scale={1.5} />
                  </Suspense>
                </Center>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {myProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-black-200/50 backdrop-blur-xl rounded-2xl border border-white-800/10 p-5 shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-5">
              <img 
                src={project.spotlight} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                 <img src={project.logo} alt="logo" className="w-6 h-6" />
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-grow">
              <h3 className="text-white text-xl font-semibold group-hover:text-violet-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-white-500 text-sm line-clamp-3">
                {project.desc}
              </p>
              
              <div className="flex items-center gap-3 mt-2">
                {project.tags.map((tag, i) => (
                  <div key={i} className="w-8 h-8 rounded-md p-1.5 bg-black-300 border border-white-800/10 flex justify-center items-center" title={tag.name}>
                    <img src={tag.path} alt={tag.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-white-800/10">
              <a
                className="flex items-center justify-between cursor-pointer text-white-500 hover:text-cyan-500 transition-colors w-full"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-medium">Check Live Site</span>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-4 h-4 invert" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
