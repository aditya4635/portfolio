import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

import Projects from './sections/Projects.jsx';


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative px-0">
      <Navbar />
      <Hero />
      
      <Projects />
      
      <div className="space-y-20 sm:space-y-32 pb-12 sm:pb-20 mt-20 sm:mt-32">
        <About />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
};

export default App;
