'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './magnetic-button';
import { siteConfig } from '@/lib/site.config';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const brand = siteConfig.brand;
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isProjectDetailPage = pathname.startsWith('/projets/') && pathname !== '/projets';

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: isProjectDetailPage ? '/#projets' : '/projets' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '#contact' },
    // { label: 'Contact', href: '/contact' },
  ];

  const landingLinks = [
    { label: 'Intro', href: '#intro' },
    { label: 'Ce que je fais', href: '#faire' },
    { label: 'Projets', href: '#projets' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  const menuLinks = isHomePage ? landingLinks : links;

  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['intro', 'faire', 'projets', 'stack', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const brandMain = brand.split('<')[0];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-1"
          onMouseEnter={() => setIsHoveringLogo(true)}
          onMouseLeave={() => setIsHoveringLogo(false)}
        >
          <span>{brandMain}</span>
          <motion.span
            animate={{ letterSpacing: isHoveringLogo ? '0.2em' : '0em' }}
            transition={{ duration: 0.3 }}
            className="text-[#00ff41]"
          >
            &lt;/&gt;
          </motion.span>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {isHomePage && activeSection && (
            <span className="text-xs text-zinc-600 font-mono uppercase tracking-widest">
              {activeSection}
            </span>
          )}
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isHomePage && link.href === `#${activeSection}`
                  ? 'text-[#00ff41]'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <MagneticButton
          onClick={() => setIsOpen(true)}
          className="md:hidden text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors"
        >
          Menu
        </MagneticButton>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-zinc-950 flex items-center justify-center md:hidden"
          >
            <MagneticButton
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-4 text-sm uppercase tracking-widest hover:text-zinc-400 transition-colors"
            >
              Fermer
            </MagneticButton>

            <div className="flex flex-col gap-8">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-6xl md:text-8xl font-bold transition-colors ${
                      isHomePage && link.href === `#${activeSection}`
                        ? 'text-[#00ff41]'
                        : 'hover:text-zinc-400'
                    }`}
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
