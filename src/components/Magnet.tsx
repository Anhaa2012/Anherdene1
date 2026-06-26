import React, { useState, useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(inactiveTransition);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      // Check if within the padding distance from the outer edge of the element
      const threshold = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < threshold) {
        // Apply magnetic effect divided by the strength factor
        const targetX = distanceX / strength;
        const targetY = distanceY / strength;
        setTransition(activeTransition);
        setPosition({ x: targetX, y: targetY });
      } else {
        // Smoothly snap back to original position
        setTransition(inactiveTransition);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
