import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isPositioned, setIsPositioned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!containerRef.current) return;
    const newRect = containerRef.current.getBoundingClientRect();
    setRect(newRect);
    // 다음 프레임에서 positioned 상태를 true로 설정
    requestAnimationFrame(() => {
      setIsPositioned(true);
    });
  };

  useEffect(() => {
    if (isVisible) {
      setIsPositioned(false);
      setRect(null);
      calculatePosition();
      const handleScroll = calculatePosition;
      const handleResize = calculatePosition;
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    } else {
      setIsPositioned(false);
      setRect(null);
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltipStyle = () => {
    if (!rect) return {};

    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const refWidth = rect.width;
    const refHeight = rect.height;

    switch (position) {
      case 'top':
        return {
          top: `${top}px`,
          left: `${left + 0.5 * refWidth}px`,
          transform: 'translate(-50%, calc(-100% - 5px))',
        };
      case 'right':
        return {
          top: `${top + 0.5 * refHeight}px`,
          left: `${left + refWidth}px`,
          transform: 'translate(5px, -50%)',
        };
      case 'bottom':
        return {
          top: `${top + refHeight}px`,
          left: `${left + 0.5 * refWidth}px`,
          transform: 'translate(-50%, 5px)',
        };
      case 'left':
        return {
          top: `${top + 0.5 * refHeight}px`,
          left: `${left}px`,
          transform: 'translate(calc(-100% - 5px), -50%)',
        };
      default:
        return {};
    }
  };

  const tooltipElement = isVisible && rect ? (
    <div
      className={`${styles.tooltip} ${styles[position]}`}
      style={{
        position: 'absolute',
        zIndex: 9999,
        opacity: isPositioned ? 1 : 0,
        visibility: isPositioned ? 'visible' : 'hidden',
        ...getTooltipStyle(),
      }}
    >
      {content}
    </div>
  ) : null;

  return (
    <>
      <div
        ref={containerRef}
        className={styles.tooltipContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {tooltipElement && createPortal(tooltipElement, document.body)}
    </>
  );
};

export default Tooltip;