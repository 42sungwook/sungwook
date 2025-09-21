import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    };

    setTimeout(scrollToTop, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
