import { Suspense, lazy } from 'react';
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/Footer.jsx';


import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';


const Hero = lazy(() => import('./sections/Hero.jsx'));
const TechStack = lazy(() => import('./sections/TechStack.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));


const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <main className="w-full relative px-0">
      <Navbar />
      
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
      
      <Projects />
      
      <div className="space-y-20 sm:space-y-32 pb-12 sm:pb-20 mt-20 sm:mt-32">
        <Suspense fallback={<SectionLoader />}>
          <TechStack />
        </Suspense>
        
        <About />
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </div>
      
      <Footer />
    </main>
  );
};

export default App;
