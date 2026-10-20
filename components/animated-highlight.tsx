'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedHighlightProps {
  children: React.ReactNode;
}

export function AnimatedHighlight({ children }: AnimatedHighlightProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (prefersReducedMotion) {
    return <span className="relative inline-block text-[#00ff41]">{children}</span>;
  }

  return (
    <motion.span
      className="relative inline-block"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 65, 0.3) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
      }}
    >
      {children}
    </motion.span>
  );
}
