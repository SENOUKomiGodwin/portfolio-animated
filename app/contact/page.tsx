import { Preloader } from "@/components/preloader";
import { Marquee } from "@/components/marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LenisProvider } from "@/components/providers";
import { PageTransition } from "@/components/page-transition";
import { EditorFrame } from "@/components/editor-frame";
import { siteConfig } from "@/lib/site.config";
import { siteData } from "@/content/site-data";

export default function ContactPage() {
  return (
    <LenisProvider>
      <Preloader />
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-12">
          <div className="max-w-4xl mx-auto w-full">
            <ScrollReveal>
              <div className="mb-4">
                <span className="text-xs text-zinc-600 font-mono">CONTACT · Form</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 sm:mb-12">
                Contact
              </h1>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <ScrollReveal delay={0.1}>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                    {siteData.availability}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block text-lg sm:text-xl md:text-2xl hover:text-[#00ff41] transition-colors break-words"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg sm:text-xl md:text-2xl hover:text-[#00ff41] transition-colors"
                    >
                      GitHub
                    </a>
                    {siteConfig.linkedin && (
                      <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg sm:text-xl md:text-2xl hover:text-[#00ff41] transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <form
                  action="https://formspree.io/f/[FORM_ID]"
                  method="POST"
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-[#00ff41] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-[#00ff41] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-[#00ff41] transition-colors resize-none"
                    />
                  </div>

                  <EditorFrame label="SUBMIT">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#00ff41] text-zinc-950 rounded-lg font-medium hover:bg-[#00cc33] transition-colors text-sm sm:text-base"
                    >
                      Envoyer
                    </button>
                  </EditorFrame>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <Marquee />
      </PageTransition>
    </LenisProvider>
  );
}
