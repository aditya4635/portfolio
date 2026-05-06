import { useState } from 'react';
import { navLinks } from '../constants/index.js';
import { useTheme } from '../hooks/useTheme.js';
import { IconButton } from '../components/Button.jsx';

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

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3 px-4 sm:px-5 bg-white/80 dark:bg-black-200/80 backdrop-blur-md border border-black-200/10 dark:border-white-800/10 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/40">

        {/* Logo */}
        <a href="/" className="text-black dark:text-white font-bold text-lg sm:text-xl hover:text-accent transition-colors flex items-center gap-1.5 flex-shrink-0">
          <span className="text-accent text-xl sm:text-2xl">&lt;</span>
          Aditya
          <span className="text-accent-dark text-xl sm:text-2xl">/&gt;</span>
        </a>

        {/* Right side — three distinct segments */}
        <div className="flex items-center">

          {/* Segment 1: External badges — desktop only */}
          <div className="hidden md:flex items-center gap-2 pr-4">
            <a
              href="https://leetcode.com/u/adityarajbhandari1020/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all shadow-md"
            >
              LeetCode
            </a>

            <a
              href="https://github.com/aditya4635"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>

            <a
              href="/assets/NSUT_TnP_Resume (5).pdf"
              download="Aditya_Raj_Bhandari_Resume.pdf"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-white bg-accent hover:bg-accent-dark transition-all shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Resume
            </a>
          </div>

          {/* sm-only Resume (tablet, no GitHub/LeetCode) */}
          <div className="hidden sm:flex md:hidden items-center gap-2 pr-4">
            <a
              href="/assets/NSUT_TnP_Resume (5).pdf"
              download="Aditya_Raj_Bhandari_Resume.pdf"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-white bg-accent hover:bg-accent-dark transition-all shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Resume
            </a>
          </div>

          {/* Divider 1 */}
          <div className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white-800/20 mx-1" />

          {/* Segment 2: Nav links */}
          <nav className="hidden lg:flex px-4">
            <NavItems />
          </nav>

          {/* Divider 2 */}
          <div className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-white-800/20 mx-1" />

          {/* Segment 3: Theme + hamburger */}
          <div className="flex items-center gap-1 pl-2">
            <IconButton
              onClick={toggleTheme}
              className="bg-black-100/5 dark:bg-white/10 hover:bg-black-100/10 dark:hover:bg-white/20"
              ariaLabel="Toggle theme"
            >
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </IconButton>

            <IconButton
              onClick={toggleMenu}
              className="lg:hidden text-neutral-400 hover:text-black dark:hover:text-white"
              ariaLabel="Toggle menu"
            >
              <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-5 h-5 invert dark:invert-0" />
            </IconButton>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet sidebar menu */}
      <div className={`lg:hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 ease-in-out overflow-hidden`}>
        <nav className="mt-2 p-5 bg-white/95 dark:bg-black-200/95 backdrop-blur-lg rounded-2xl border border-black-200/10 dark:border-white-800/10 shadow-lg">
          <NavItems onClick={closeMenu} />

          {/* Resume inside drawer on mobile only */}
          <div className="sm:hidden mt-4 pt-4 border-t border-black-300/20 dark:border-white-800/10">
            <a
              href="/assets/NSUT_TnP_Resume (5).pdf"
              download="Aditya_Raj_Bhandari_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-medium text-sm text-white bg-accent hover:bg-accent-dark transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Links hidden from header on mobile — shown in drawer */}
          <div className="md:hidden flex flex-wrap gap-2 mt-4 pt-4 border-t border-black-300/20 dark:border-white-800/10">
            <a
              href="https://leetcode.com/u/adityarajbhandari1020/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-orange-500 to-yellow-500"
            >
              LeetCode
            </a>
            <a
              href="https://github.com/aditya4635"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-white bg-gray-800 dark:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
