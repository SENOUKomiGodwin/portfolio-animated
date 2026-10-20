import { Preloader } from "@/components/preloader";
import { Marquee } from "@/components/marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { DividerLine } from "@/components/divider-line";
import { LenisProvider } from "@/components/providers";
import { PageTransition } from "@/components/page-transition";
import { ProjectHoverPreview } from "@/components/project-hover-preview";
import { BrowserMockup } from "@/components/mockups/browser-mockup";
import { DesktopMockup } from "@/components/mockups/desktop-mockup";
import { PhoneMockup } from "@/components/mockups/phone-mockup";
import { siteConfig } from "@/lib/site.config";
import Link from 'next/link';

function ProjectCard({ project, index }: { project: typeof siteConfig.projects[0]; index: number }) {
  const getMockup = () => {
    switch (project.id) {
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
    <ScrollReveal key={project.id} delay={index * 0.1}>
      <ProjectHoverPreview projectId={project.id} title={project.title}>
        <div className="p-8 border border-zinc-800 hover:border-[#00ff41] transition-colors min-h-[400px] flex flex-col group">
          <Link href={`/projets/${project.id}`} className="block flex-1">
            <div className="aspect-video bg-zinc-900 rounded-lg mb-6 overflow-hidden border border-zinc-800">
              {getMockup()}
            </div>
            <h2 className="text-[2.5rem] font-bold mb-4">{project.title}</h2>
            <p className="text-zinc-300 mb-4 text-base leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[13px] px-3 py-1 bg-zinc-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
          <div className="mt-auto pt-4 border-t border-zinc-800">
            <p className="text-sm text-zinc-400 mb-2">{project.type}</p>
            <div className="flex gap-4">
              <Link href={`/projets/${project.id}`} className="text-sm text-[#00ff41] hover:underline">
                Voir les détails →
              </Link>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00ff41] hover:underline"
                >
                  Voir la démo →
                </a>
              )}
            </div>
          </div>
        </div>
      </ProjectHoverPreview>
    </ScrollReveal>
  );
}

export default function ProjectsPage() {
  return (
    <LenisProvider>
      <Preloader />
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <ScrollReveal>
              <div className="mb-4">
                <span className="text-xs text-zinc-600 font-mono">PROJECTS · Roll 03</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-12">
                Projets
              </h1>
            </ScrollReveal>

            <DividerLine className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        <Marquee />
      </PageTransition>
    </LenisProvider>
  );
}
