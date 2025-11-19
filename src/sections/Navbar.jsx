import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../constants/index.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      ref={headerRef}
      className="fixed top-4 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 mx-auto c-space bg-black-200/80 backdrop-blur-md border border-white-800/10 rounded-2xl shadow-lg shadow-violet-500/10">
          <a href="/" className="text-white font-bold text-xl hover:text-violet-500 transition-colors flex items-center gap-2">
            <span className="text-violet-500 text-2xl">&lt;</span>
            Aditya
            <span className="text-cyan-500 text-2xl">/&gt;</span>
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 ease-in-out overflow-hidden`}>
        <nav className="p-5 bg-black-200/90 backdrop-blur-lg border-b border-white-800/10">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
