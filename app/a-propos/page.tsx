import { Preloader } from "@/components/preloader";
import { Marquee } from "@/components/marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TextReveal } from "@/components/text-reveal";
import { DividerLine } from "@/components/divider-line";
import { LenisProvider } from "@/components/providers";
import { PageTransition } from "@/components/page-transition";
import { siteConfig } from "@/lib/site.config";

function SkillLine({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="group cursor-pointer transition-transform hover:translate-x-2">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-xl font-semibold text-zinc-400 group-hover:text-[#00ff41] transition-colors">
          {label}
        </h3>
        <div className="flex-1 h-px bg-zinc-800 group-hover:bg-[#00ff41] transition-colors" />
      </div>
      <div className="flex flex-wrap gap-2 pl-20">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1 bg-zinc-800 rounded-full border border-zinc-700 group-hover:border-[#00ff41] group-hover:text-[#00ff41] transition-colors"
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
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16">
            <div>
              <ScrollReveal>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-12">
                  À propos
                </h1>
              </ScrollReveal>

              <DividerLine className="mb-12" />

              <TextReveal delay={0.1}>
                <div className="space-y-8 text-lg text-zinc-300 leading-relaxed">
                  <p>
                    Je suis {siteConfig.name}, {siteConfig.title} basé à {siteConfig.location}.
                    Je développe des applications web et desktop avec une attention particulière pour l'expérience utilisateur et la qualité du code.
                  </p>
                  <p>
                    Mes projets incluent des sites vitrine en HTML/CSS/JavaScript, des applications desktop en Python avec PySide6, et des contributions à des projets d'équipe.
                  </p>
                  <p>
                    Disponible pour des missions freelance et des opportunités à temps plein.
                  </p>
                </div>
              </TextReveal>

              <DividerLine className="my-16" />

              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold mb-8">Compétences</h2>

                  <div className="space-y-8">
                    <SkillLine label="Langages" skills={siteConfig.skills.languages} />
                    <SkillLine label="Frameworks et librairies" skills={siteConfig.skills.frameworks} />
                    <SkillLine label="Bases de données" skills={siteConfig.skills.databases} />
                    <SkillLine label="Outils" skills={siteConfig.skills.tools} />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tight">
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
