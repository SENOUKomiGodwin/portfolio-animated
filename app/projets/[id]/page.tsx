import { Preloader } from "@/components/preloader";
import { Marquee } from "@/components/marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";
import { ImageReveal } from "@/components/image-reveal";
import { DividerLine } from "@/components/divider-line";
import { LenisProvider } from "@/components/providers";
import { PageTransition } from "@/components/page-transition";
import { EditorFrame } from "@/components/editor-frame";
import { BrowserMockup } from "@/components/mockups/browser-mockup";
import { DesktopMockup } from "@/components/mockups/desktop-mockup";
import { PhoneMockup } from "@/components/mockups/phone-mockup";
import { siteConfig } from "@/lib/site.config";
import { siteData } from "@/content/site-data";
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = siteConfig.projects.find((p) => p.id === id);
  const originalProject = siteData.projects.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <LenisProvider>
      <Preloader />
      <PageTransition>
        <section className="min-h-screen px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-24">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/#projets"
              className="inline-flex items-center text-xs sm:text-sm text-zinc-400 hover:text-zinc-100 mb-6 sm:mb-8 transition-colors"
            >
              ← Retour aux projets
            </Link>

            <ScrollReveal>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-6 sm:mb-8">
                {project.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="aspect-video bg-zinc-900 rounded-lg mb-8 sm:mb-12 overflow-hidden border border-zinc-800">
                {project.id === 'agritogo' && <BrowserMockup />}
                {project.id === 'edupaie' && <DesktopMockup />}
                {project.id === 'bidapp' && <PhoneMockup />}
              </div>
            </ScrollReveal>

            <DividerLine className="mb-8 sm:mb-12" />

            <TextReveal delay={0.2}>
              <div className="prose prose-invert max-w-none mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Problème</h2>
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                  {project.description}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ce que j'ai construit</h2>
                <ul className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8 list-disc pl-4 sm:pl-6">
                  {originalProject?.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Stack technique</h2>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 bg-zinc-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.deployment && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Déploiement</h2>
                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                      {project.deployment}
                    </p>
                  </>
                )}

                {project.role && project.role !== '[À REMPLIR]' && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Mon rôle</h2>
                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                      {project.role}
                    </p>
                  </>
                )}
              </div>
            </TextReveal>

            <DividerLine className="mb-6 sm:mb-8" />

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <EditorFrame label="CODE">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#00ff41] text-zinc-950 rounded-lg font-medium hover:bg-[#00cc33] transition-colors text-sm sm:text-base"
                  >
                    Voir le code
                  </a>
                </EditorFrame>
                {project.demo && (
                  <EditorFrame label="LIVE">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-sm sm:text-base"
                    >
                      Démo live
                    </a>
                  </EditorFrame>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
        <Marquee />
      </PageTransition>
    </LenisProvider>
  );
}
