import { Preloader } from "@/components/preloader";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { HorizontalScroll } from "@/components/horizontal-scroll";
import { LenisProvider } from "@/components/providers";
import { PageTransition } from "@/components/page-transition";

export default function Home() {
  return (
    <LenisProvider>
      <Preloader />
      <PageTransition>
        <Hero />
        <Marquee />
        <HorizontalScroll />
      </PageTransition>
    </LenisProvider>
  );
}
