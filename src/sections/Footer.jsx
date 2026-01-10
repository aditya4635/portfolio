import { useEffect, useState } from 'react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    
    const storedCount = localStorage.getItem('portfolioVisitorCount');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    
    
    const newCount = count + 1;
    localStorage.setItem('portfolioVisitorCount', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300/20 dark:border-white-800/10 backdrop-blur-xl bg-white/30 dark:bg-black-200/30">
      <div className="flex justify-center sm:justify-between items-center flex-wrap gap-3 sm:gap-5">
        <div className="text-gray-600 dark:text-white-500 flex gap-2 text-sm sm:text-base">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/aditya4635" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 invert dark:invert-0" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-raj-bhandari/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 invert-0 dark:invert" />
          </a>
          <a href="https://www.instagram.com/_aditttttya/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 invert dark:invert-0" />
          </a>
        </div>

        <p className="text-gray-600 dark:text-white-500 text-sm sm:text-base text-center w-full sm:w-auto">
          © 2024 Aditya Raj Bhandari. Licensed under MIT License.
        </p>
      </div>

      {}
      <div className="flex justify-center items-center gap-2 mt-4 text-gray-600 dark:text-white-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm font-medium">
          Visitors: <span className="font-bold text-violet-500">{visitorCount.toLocaleString()}</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
