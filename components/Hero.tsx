import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-wrap items-center gap-14 md:gap-10 pt-16 pb-16 md:pt-24 md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-[5rem] z-0 translate-y-1/4 font-display text-[290px] leading-[0.85] font-bold text-watermark select-none md:top-[-1rem] md:right-[-2.5rem] md:bottom-auto md:translate-y-0 md:text-[520px] min-[768px]:max-[839px]:bottom-[6rem] min-[768px]:max-[839px]:top-auto"
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
        className="relative z-10 ml-auto mt-4 aspect-square w-32 rounded-full border-[6px] border-paper object-cover md:ml-auto md:mt-0 md:w-44"
      />
    </section>
  );
}
