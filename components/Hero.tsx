import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-wrap items-center gap-10 overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -right-6 font-display text-[260px] leading-[0.85] font-bold text-watermark select-none md:-right-10 md:text-[520px]"
      >
        W
      </div>

      <div className="relative min-w-0 flex-[999_1_560px]">
        <SectionLabel className="text-amber">
          Solution Architect & Engineering Lead · Amsterdam
        </SectionLabel>
        <h1 className="mt-5 bg-[linear-gradient(110deg,var(--color-ink)_0%,var(--color-amber)_60%)] bg-clip-text pb-2 font-display text-[56px] leading-none font-bold tracking-tight text-transparent sm:text-7xl md:text-[104px]">
          Erik Weihs
        </h1>
        <p className="mt-6 max-w-[34ch] font-display text-2xl leading-snug text-ink md:text-[32px]">
          Building scalable platforms and helping engineering teams do their best work.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@erikweihs.com"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-[15px] font-bold text-paper transition-colors duration-200 hover:bg-amber"
            data-umami-event="contact_click"
            data-umami-event-method="email"
          >
            hello@erikweihs.com
          </a>
          <a
            href="https://www.linkedin.com/in/erik-weihs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-full border border-ink px-6 text-[15px] font-bold text-ink transition-colors duration-200 hover:border-amber hover:text-amber"
            data-umami-event="social_click"
            data-umami-event-platform="linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <Image
        src="/profile.webp"
        alt="Erik Weihs"
        width={176}
        height={176}
        priority
        className="relative aspect-square w-32 rounded-full border-[6px] border-paper object-cover md:w-44"
      />
    </section>
  );
}
