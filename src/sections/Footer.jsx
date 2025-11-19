const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300/20 dark:border-white-800/10 flex justify-between items-center flex-wrap gap-5 backdrop-blur-xl bg-white/30 dark:bg-black-200/30">
      <div className="text-gray-600 dark:text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/aditya4635" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-raj-bhandari/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 invert-0 dark:invert" />
        </a>
        <a href="https://www.instagram.com/_aditttttya/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-gray-600 dark:text-white-500">© 2024 Aditya Raj Bhandari. Licensed under MIT License.</p>
    </footer>
  );
};

export default Footer;
