'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserMockup } from '@/components/mockups/browser-mockup';
import { DesktopMockup } from '@/components/mockups/desktop-mockup';
import { PhoneMockup } from '@/components/mockups/phone-mockup';

interface ProjectHoverPreviewProps {
  projectId: string;
  title: string;
  children: React.ReactNode;
}

export function ProjectHoverPreview({ projectId, title, children }: ProjectHoverPreviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lerpPosition, setLerpPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  const getMockup = () => {
    switch (projectId) {
      case 'agritogo':
        return <BrowserMockup />;
      case 'edupaie':
        return <DesktopMockup />;
      case 'bidapp':
        return <PhoneMockup />;
      default:
        return null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const offsetX = 20;
    const offsetY = 20;

    setPosition({
      x: e.clientX + offsetX,
      y: e.clientY + offsetY,
    });
  };

  useEffect(() => {
    const animate = () => {
      setLerpPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    if (isVisible) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible, position]);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            style={{ left: lerpPosition.x, top: lerpPosition.y }}
            className="fixed pointer-events-none z-[80] w-64 h-40 rounded-lg overflow-hidden border border-zinc-800 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {getMockup()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
