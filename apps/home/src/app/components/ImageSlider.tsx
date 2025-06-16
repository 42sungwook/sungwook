import React, { useState } from 'react';
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
  images: readonly string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.imageSlider}>
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
      </div>

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

      <div className={styles.sliderCounter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;
