'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './magnetic-button';
import { siteConfig } from '@/lib/site.config';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projets' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-1"
          onMouseEnter={() => setIsHoveringLogo(true)}
          onMouseLeave={() => setIsHoveringLogo(false)}
        >
          <span>Win_ner</span>
          <motion.span
            animate={{ letterSpacing: isHoveringLogo ? '0.2em' : '0em' }}
            transition={{ duration: 0.3 }}
            className="text-[#00ff41]"
          >
            &lt;/&gt;
          </motion.span>
        </Link>

        <MagneticButton
          onClick={() => setIsOpen(true)}
          className="text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors"
        >
          Menu
        </MagneticButton>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-zinc-950 flex items-center justify-center"
          >
            <MagneticButton
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-4 text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors"
            >
              Fermer
            </MagneticButton>

            <div className="flex flex-col gap-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-6xl md:text-8xl font-bold hover:text-zinc-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
