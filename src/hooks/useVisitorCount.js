import { useState, useEffect } from 'react';

export const useVisitorCount = (storageKey = 'portfolioVisitorCount') => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem(storageKey);
    let count = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Check if the user has already been counted during this current browser session
    const hasVisitedThisSession = sessionStorage.getItem('hasVisitedThisSession');

    if (!hasVisitedThisSession) {
      count += 1;
      localStorage.setItem(storageKey, count.toString());
      sessionStorage.setItem('hasVisitedThisSession', 'true');
    }
    
    setVisitorCount(count);
  }, [storageKey]);

  return visitorCount;
};
