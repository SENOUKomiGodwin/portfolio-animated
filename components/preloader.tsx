'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Vérifier si le preloader a déjà été affiché cette session
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          sessionStorage.setItem('hasVisited', 'true');
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center"
        >
          <div className="text-8xl md:text-9xl font-bold text-zinc-100">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

