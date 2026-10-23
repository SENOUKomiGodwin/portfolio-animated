'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { siteData } from '@/content/site-data';
import { BrowserMockup } from '@/components/mockups/browser-mockup';
import { DesktopMockup } from '@/components/mockups/desktop-mockup';
import { PhoneMockup } from '@/components/mockups/phone-mockup';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: typeof siteData.projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const getMockup = () => {
    if (project.slug === 'agritogo') return <BrowserMockup />;
    if (project.slug === 'edupaie') return <DesktopMockup />;
    if (project.slug === 'bid-app') return <PhoneMockup />;
    return null;
  };

  const getImagePath = () => {
    const slugMap: Record<string, string> = {
      'agritogo': 'agritogo.png',
      'edupaie': 'Edupaie.png',
      'bid-app': 'bidapp.png'
    };
    return `/projects/${slugMap[project.slug] || ''}`;
  };

  const hasImage = ['agritogo', 'edupaie', 'bid-app'].includes(project.slug);

  const imageX = useTransform(mouseX, [0, 400], [-20, 20]);
  const imageY = useTransform(mouseY, [0, 400], [-20, 20]);

  return (
    <div className="w-[85vw] sm:w-[75vw] md:w-[70vw] lg:w-[65vw] flex-shrink-0">
      <motion.div
        className="relative bg-zinc-900 border border-zinc-800 hover:border-[#00ff41] transition-colors p-6 sm:p-8 md:p-10 lg:p-12 cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/projets/${project.slug}`} className="absolute inset-0 z-10" />

        <div className="absolute top-4 right-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-800 group-hover:text-[#00ff41] transition-colors">
          0{index + 1}
        </div>

        {project.type?.includes('Contribution') && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#00ff41] text-zinc-950 text-xs sm:text-sm font-bold rounded-full">
            Contribution
          </div>
        )}

        <div className="aspect-video bg-zinc-950 rounded-lg mb-6 sm:mb-8 overflow-hidden border border-zinc-800">
          <motion.div
            style={{ x: imageX, y: imageY }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          >
            {hasImage ? (
              <img
                src={getImagePath()}
                alt={project.slug}
                className="w-full h-full object-cover"
              />
            ) : (
              getMockup()
            )}
          </motion.div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          {project.slug.charAt(0).toUpperCase() + project.slug.slice(1)}
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 mb-4 sm:mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-base sm:text-lg px-3 py-1 sm:px-4 sm:py-2 bg-zinc-800 rounded-full border border-zinc-700 group-hover:border-[#00ff41] group-hover:text-[#00ff41] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 sm:gap-4 flex-wrap relative z-20">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-base sm:text-lg"
            >
              Voir la démo
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ff41] text-zinc-950 rounded-lg font-medium hover:bg-[#00cc33] transition-colors text-base sm:text-lg"
          >
            Voir le code
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;

      if (!section || !container) return;

      const panels = gsap.utils.toArray('.project-panel');

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => '+=' + container.offsetWidth,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projets" ref={sectionRef} className="min-h-[100svh] overflow-hidden">
      <div className="mb-8 sm:mb-12 px-4 pt-12 sm:pt-16">
        <span className="text-xs text-zinc-600 font-mono">PROJECTS · Roll 03</span>
      </div>

      <div ref={containerRef} className="flex gap-4 sm:gap-6 lg:gap-16 px-4">
        {siteData.projects.map((project, index) => (
          <div key={project.slug} className="project-panel flex-shrink-0">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
