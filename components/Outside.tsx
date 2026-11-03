import Image from "next/image";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

const figures = [
  { value: "4:03:38", label: "Amsterdam Marathon, October 2026" },
  { value: "€1,549", label: "Raised for KWF Ren tegen kanker" },
];

const linkClasses =
  "inline-flex min-h-11 items-center text-sm font-bold text-paper underline decoration-ink-faint underline-offset-4 transition-colors duration-200 hover:text-amber-light hover:decoration-amber-light";

export default function Outside() {
  return (
    <section id="outside" className="scroll-mt-16 bg-ink text-paper-darker">
      <Container>
        <div className="space-y-20 py-20 md:py-28">
          <div className="flex flex-wrap items-center gap-12">
            <Image
              src="/running-amsterdam.webp"
              alt="Tying running shoes by the Amsterdam waterfront at sunrise"
              width={800}
              height={450}
              className="aspect-[16/11] w-full min-w-0 flex-[1_1_420px] rounded-md object-cover md:max-w-[540px]"
            />
            <div className="min-w-0 flex-[1_1_420px] space-y-5">
              <SectionLabel className="text-amber-light">Outside work</SectionLabel>
              <h2 className="font-display text-4xl leading-tight font-bold text-paper md:text-[44px]">
                Early mornings, long distances
              </h2>
              <p className="text-[17px] leading-relaxed">
                Running has become an important part of my life.
              </p>
              <p className="text-[17px] leading-relaxed">
                There&apos;s something about heading out early, when the city is still quiet, that
                helps me clear my head. Whether it&apos;s an easy run along the canals or training
                for a race, I enjoy the challenge of getting a little better every day.
              </p>
              <p className="text-[17px] leading-relaxed">
                Running has taught me a lot about patience, consistency, and the value of showing
                up, even when things get difficult.
              </p>
              <a
                href="https://strava.app.link/ZXnGcH5WG7b"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
                data-umami-event="social_click"
                data-umami-event-platform="strava"
              >
                Follow on Strava →
              </a>
            </div>
          </div>

          <div className="flex flex-wrap-reverse items-center gap-12">
            <div className="min-w-0 flex-[1_1_420px] space-y-5">
              <h3 className="font-display text-3xl leading-tight font-bold text-paper md:text-4xl">
                My first marathon
              </h3>
              <dl className="flex flex-wrap gap-x-12 gap-y-6">
                {figures.map((figure) => (
                  <div key={figure.value} className="flex flex-col-reverse gap-2">
                    <dt className="text-[13px]">{figure.label}</dt>
                    <dd className="font-display text-4xl leading-none font-bold text-paper md:text-[44px]">
                      {figure.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-[17px] leading-relaxed">
                In October 2026, I completed my first marathon in Amsterdam.
              </p>
              <p className="text-[17px] leading-relaxed">
                Four months of training, a knee injury just two weeks before race day, and 42.2
                kilometres later, I crossed the finish line in 4:03:38.
              </p>
              <p className="text-[17px] leading-relaxed">
                Through KWF Ren tegen kanker, I also raised €1,549 for cancer research, making the
                experience even more meaningful.
              </p>
              <p className="text-[17px] leading-relaxed">
                A reminder that the most rewarding challenges are rarely the easiest ones.
              </p>
              <a
                href="https://strava.app.link/J81gfU5XG7b"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
                data-umami-event="activity_click"
                data-umami-event-activity="amsterdam_marathon"
              >
                See the run →
              </a>
            </div>
            <Image
              src="/marathon-medal.webp"
              alt="Finishing the TCS Amsterdam Marathon with medal"
              width={1000}
              height={1422}
              className="aspect-[4/5] w-full min-w-0 flex-[1_1_320px] rounded-md object-cover object-[center_30%] md:max-w-[420px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
