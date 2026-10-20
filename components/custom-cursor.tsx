'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setIsHovering(true);
        setLabel(target.tagName === 'A' ? 'Voir' : 'Clic');
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setLabel('');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-zinc-400 pointer-events-none z-[70] hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#00ff41' : '#a1a1aa',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {label && (
        <motion.div
          className="fixed top-0 left-0 px-3 py-1 bg-zinc-800 text-zinc-100 text-sm rounded pointer-events-none z-[70] hidden md:block"
          animate={{
            x: position.x + 20,
            y: position.y - 10,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          {label}
        </motion.div>
      )}
    </>
  );
}
