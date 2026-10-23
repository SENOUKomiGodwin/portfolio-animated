'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/lib/site.config';
import { BrowserMockup } from '@/components/mockups/browser-mockup';
import { DesktopMockup } from '@/components/mockups/desktop-mockup';
import { PhoneMockup } from '@/components/mockups/phone-mockup';
import { EditorFrame } from '@/components/editor-frame';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;

      if (!section || !container) return;

      const panels = gsap.utils.toArray('.panel');

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

  const getMockup = (projectId: string) => {
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

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden">
      <div ref={containerRef} className="flex h-full">
        {siteConfig.projects.map((project) => (
          <div
            key={project.id}
            className="panel flex-shrink-0 flex items-center justify-center p-4 sm:p-6 md:p-8"
            style={{ width: '85vw' }}
          >
            <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 whitespace-nowrap overflow-hidden">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 mb-4 md:mb-8 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-2 py-1 md:px-3 md:py-1 bg-zinc-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <EditorFrame label="VIEW CODE">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 md:px-6 md:py-3 bg-[#00ff41] text-zinc-950 rounded-lg font-medium hover:bg-[#00cc33] transition-colors text-sm md:text-base"
                  >
                    Voir le code
                  </a>
                </EditorFrame>
              </div>
              <div className="aspect-video hidden lg:block">
                {getMockup(project.id)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
