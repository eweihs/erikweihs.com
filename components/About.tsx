import SectionLabel from "@/components/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="flex scroll-mt-16 flex-wrap gap-x-12 gap-y-6 border-t border-border py-16 md:py-20"
    >
      <div className="flex-[1_1_220px]">
        <SectionLabel>About</SectionLabel>
      </div>
      <div className="min-w-0 flex-[999_1_560px] space-y-5 text-lg leading-relaxed md:text-[19px]">
        <p>
          I&apos;m a solution architect and engineering lead based in{" "}
          <span className="font-medium text-ink">Amsterdam</span>, with over a decade of experience
          building digital products and leading technical teams.
        </p>
        <p>
          At{" "}
          <a
            href="https://www.talpa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
          >
            Talpa Network
          </a>
          , I&apos;ve spent more than seven years working on large-scale web platforms, from audio
          and video streaming services to a shared web architecture powering some of the
          Netherlands&apos; best-known media brands.
        </p>
        <p>
          Over the years, my focus has evolved from writing code and designing systems to leading
          engineers, shaping technical direction, and improving how teams work together. I enjoy
          simplifying complexity, helping people grow, and creating an environment where engineers
          feel empowered to take ownership.
        </p>
        <p className="font-display text-2xl leading-snug text-ink md:text-[28px]">
          I still love technology, but I&apos;ve learned that building great teams is just as
          rewarding as building great software.
        </p>
        <p>
          Outside of work, you&apos;ll often find me running along Amsterdam&apos;s canals, training
          for my next challenge, or supporting causes that matter to me.
        </p>
      </div>
    </section>
  );
}
