'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#00ff41] z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
