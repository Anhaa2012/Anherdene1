import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p ref={containerRef} className={`${className} relative inline`}>
      {characters.map((char, index) => {
        // Distribute character fade triggers evenly across the scroll progress
        // Provide a slight overlap (e.g. 5% of total text length or a small step) to ensure seamless reading
        const step = 1 / total;
        const start = index * step;
        const end = Math.min(1, start + step * 4); // overlaps over 4 characters for smoother visual flow

        return (
          <Character 
            key={index} 
            char={char} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  key?: any;
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder */}
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span 
        style={{ opacity }} 
        className="absolute left-0 top-0 select-none"
      >
        {char}
      </motion.span>
    </span>
  );
}
