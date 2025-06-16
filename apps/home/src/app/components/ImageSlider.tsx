import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
  images: readonly string[];
  autoSlideInterval?: number; // ms
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // 자동 슬라이드
  useEffect(() => {
    if (!isHovered && images.length > 1) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, autoSlideInterval);
    }

    return () => {
      resetTimeout();
    };
  }, [
    currentIndex,
    isHovered,
    autoSlideInterval,
    images.length,
    resetTimeout,
    goToNext,
  ]);

  return (
    <div
      className={styles.imageSlider}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.sliderContainer}>
        <button
          onClick={goToPrevious}
          className={`${styles.sliderButton} ${styles.prev}`}
        >
          ‹
        </button>

        <div className={styles.sliderContent}>
          <img
            src={images[currentIndex]}
            alt={`Project screenshot ${currentIndex + 1}`}
            className={styles.sliderImage}
          />
        </div>

        <button
          onClick={goToNext}
          className={`${styles.sliderButton} ${styles.next}`}
        >
          ›
        </button>

        <div className={styles.sliderDots}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ''
              }`}
            />
          ))}
        </div>
      </div>

      <div className={styles.sliderCounter}>
        <span>
          {currentIndex + 1} / {images.length}
        </span>
        <span
          className={`${styles.autoSlideIndicator} ${
            !isHovered && images.length > 1 ? styles.visible : styles.hidden
          }`}
        >
          자동 재생 중
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
