import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <span>sungwook</span>
        </div>
        <ul className={styles.navMenu}>
          <li>
            <button onClick={() => scrollToSection('hero')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
