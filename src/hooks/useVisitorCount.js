import { useState, useEffect } from 'react';

export const useVisitorCount = (storageKey = 'portfolioVisitorCount') => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem(storageKey);
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    
    const newCount = count + 1;
    localStorage.setItem(storageKey, newCount.toString());
    setVisitorCount(newCount);
  }, [storageKey]);

  return visitorCount;
};
