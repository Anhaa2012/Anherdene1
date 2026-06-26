import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  key?: any;
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  viewportMargin?: string;
  as?: string | React.ComponentType<any>;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  x = 0,
  y = 40,
  scale = 1,
  viewportMargin = '0px 0px -100px 0px',
  as = 'div',
  className = '',
  style,
  id,
}: FadeInProps) {
  // Use motion.create to construct a motion component for the dynamic tag/component.
  const MotionComponent = typeof as === 'string' && (motion as any)[as] 
    ? (motion as any)[as] 
    : (motion as any).create?.(as) || (motion as any)(as);

  return (
    <MotionComponent
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo / cubic-bezier
      }}
    >
      {children}
    </MotionComponent>
  );
}
