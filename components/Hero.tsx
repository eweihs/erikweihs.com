import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-wrap items-center gap-14 md:gap-10 pt-16 pb-16 md:pt-24 md:pb-32"
    >
      <div className="relative z-10 min-w-0 flex-[999_1_560px]">
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

      {/* The photo is pinned to the W's bottom-right corner, so they move as one.
          From 840px there is room for the text beside it (560 + 40 gap + 176 + 64 padding),
          so the pair moves behind the top right of the hero there. */}
      <div className="relative ml-auto -mt-16 min-[840px]:absolute min-[840px]:top-[-1rem] min-[840px]:right-[-2rem] min-[840px]:mt-0">
        <div
          aria-hidden="true"
          className="pointer-events-none font-display text-[clamp(260px,82vw,360px)] leading-[0.85] font-bold text-watermark select-none min-[840px]:text-[520px]"
        >
          W
        </div>
        <Image
          src="/profile.webp"
          alt="Erik Weihs"
          width={176}
          height={176}
          priority
          className="absolute right-0 bottom-0 aspect-square w-32 rounded-full border-[6px] border-paper object-cover md:w-44"
        />
      </div>
    </section>
  );
}
