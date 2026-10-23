import { Preloader } from "@/components/preloader";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { LenisProvider } from "@/components/providers";
import { PageTransition } from "@/components/page-transition";
import { IntroSection } from "@/components/sections/intro-section";
import { WhatIDoSection } from "@/components/sections/what-i-do-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <LenisProvider>
      <Preloader />
      <PageTransition>
        <Hero />
        <Marquee />
        <IntroSection />
        <WhatIDoSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
        <FooterSection />
      </PageTransition>
    </LenisProvider>
  );
}
