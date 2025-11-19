import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

import Projects from './sections/Projects.jsx';


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      
      <Projects />
      
      <div className="space-y-32 pb-20 mt-32"> {/* Increased spacing for About and Contact */}
        <About />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
};

export default App;
