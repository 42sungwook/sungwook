import { useState, useEffect } from 'react';

interface UseTypingAnimationOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
}

export const useTypingAnimation = ({
  text,
  speed = 50,
  startDelay = 0,
  onComplete,
}: UseTypingAnimationOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(startDelay === 0);

  useEffect(() => {
    if (startDelay > 0) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      return () => clearTimeout(startTimeout);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, hasStarted, isComplete, onComplete]);

  const reset = () => {
    setDisplayedText('');
    setIsComplete(false);
    setHasStarted(startDelay === 0);
  };

  return {
    displayedText,
    isComplete,
    reset,
  };
};
