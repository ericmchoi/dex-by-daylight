import { useEffect, useState } from 'react';

const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window?.pageYOffset ?? 0);
    };

    window?.addEventListener('scroll', updateScrollPosition);

    updateScrollPosition();

    return () => window?.removeEventListener('scroll', updateScrollPosition);
  });

  return scrollPosition;
};

export default useScrollPosition;
