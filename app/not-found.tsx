import Link from "next/link";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <Container>
      <main className="flex min-h-screen flex-col items-start justify-center gap-6 py-16">
        <SectionLabel className="text-amber">404</SectionLabel>
        <h1 className="bg-[linear-gradient(110deg,var(--color-ink)_0%,var(--color-amber)_75%)] bg-clip-text font-display text-5xl leading-tight font-bold tracking-tight text-transparent md:text-6xl">
          Page not found
        </h1>
        <p className="max-w-sm leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-[15px] font-bold text-paper transition-colors duration-200 hover:bg-amber"
        >
          Back to home
        </Link>
      </main>
    </Container>
  );
}
