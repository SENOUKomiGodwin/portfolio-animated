import { Preloader } from "@/components/preloader";
import { Marquee } from "@/components/marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";
import { DividerLine } from "@/components/divider-line";
import { LenisProvider } from "@/components/providers";
import { PageTransition } from "@/components/page-transition";
import { AnimatedHighlight } from "@/components/animated-highlight";
import { siteConfig } from "@/lib/site.config";
import { siteData } from "@/content/site-data";

function SkillLine({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="group cursor-pointer transition-transform hover:translate-x-2">
      <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-400 group-hover:text-[#00ff41] transition-colors">
          {label}
        </h3>
        <div className="flex-1 h-px bg-zinc-800 group-hover:bg-[#00ff41] transition-colors" />
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 pl-16 sm:pl-20">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 bg-zinc-800 rounded-full border border-zinc-700 group-hover:border-[#00ff41] group-hover:text-[#00ff41] transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <LenisProvider>
      <Preloader />
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-12">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <ScrollReveal>
                <div className="mb-4">
                  <span className="text-xs text-zinc-600 font-mono">FILE 01 — About</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 sm:mb-12">
                  À propos
                </h1>
              </ScrollReveal>

              <DividerLine className="mb-8 sm:mb-12" />

              <TextReveal delay={0.1}>
                <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-zinc-300 leading-relaxed">
                  <p>{siteData.bio}</p>
                </div>
              </TextReveal>

              <DividerLine className="my-8 sm:my-16" />

              <ScrollReveal delay={0.2}>
                <div>
                  <div className="mb-4">
                    <span className="text-xs text-zinc-600 font-mono">SKILLS · List</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Compétences</h2>

                  <div className="space-y-6 sm:space-y-8">
                    <SkillLine label="Langages" skills={siteData.skills.languages} />
                    <SkillLine label="Frameworks et librairies" skills={siteData.skills.frameworks} />
                    <SkillLine label="Bases de données" skills={siteData.skills.databases} />
                    <SkillLine label="Outils" skills={siteData.skills.tools} />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex items-center justify-center order-first lg:order-last mb-8 lg:mb-0">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-center break-words">
                <span className="text-zinc-800">Win_ner</span>
                <span className="text-[#00ff41]">&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </section>
        <Marquee />
      </PageTransition>
    </LenisProvider>
  );
}
