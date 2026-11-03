import About from "@/components/About";
import Career from "@/components/Career";
import ConsoleGreeting from "@/components/ConsoleGreeting";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Outside from "@/components/Outside";
import SelectedWork from "@/components/SelectedWork";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:ring-2 focus:ring-amber"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Container>
          <Hero />
          <About />
          <SelectedWork />
          <Career />
        </Container>
        <Outside />
      </main>
      <Contact />
      <ConsoleGreeting />
    </>
  );
}
