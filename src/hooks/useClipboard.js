import { useState, useCallback } from 'react';

export const useClipboard = (timeoutDuration = 2000) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = useCallback((textToCopy) => {
    if (!textToCopy) return;
    
    navigator.clipboard.writeText(textToCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, timeoutDuration);
  }, [timeoutDuration]);

  return { hasCopied, handleCopy };
};
