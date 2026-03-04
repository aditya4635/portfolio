

export const IconButton = ({ onClick, ariaLabel, children, className = '' }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full transition-colors focus:outline-none flex items-center justify-center ${className}`}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

export const ActionLink = ({ href, download, target, rel, className = '', children }) => (
  <a
    href={href}
    download={download}
    target={target}
    rel={rel}
    className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg text-white ${className}`}
  >
    {children}
  </a>
);
