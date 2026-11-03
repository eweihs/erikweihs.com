import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

const SOCIAL_LINKS = [
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/erik-weihs/" },
  { platform: "github", label: "GitHub", href: "https://github.com/eweihs" },
  { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/erikvice/" },
  { platform: "strava", label: "Strava", href: "https://strava.app.link/ZXnGcH5WG7b" },
];

export default function Contact() {
  return (
    <footer>
      <Container>
        <div className="space-y-5 py-20 md:py-28">
          <SectionLabel>Get in touch</SectionLabel>
          <a
            href="mailto:hello@erikweihs.com"
            className="block font-display text-[clamp(2rem,7vw,4rem)] leading-tight font-bold break-words text-ink transition-colors duration-200 hover:text-amber"
            data-umami-event="contact_click"
            data-umami-event-method="email"
          >
            hello@erikweihs.com
          </a>
          <ul className="flex flex-wrap gap-x-6 text-sm font-medium text-ink-light">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-amber"
                  data-umami-event="social_click"
                  data-umami-event-platform={link.platform}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="pt-12 text-[13px] text-ink-faint">
            <a
              href="https://github.com/eweihs/erikweihs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-amber hover:decoration-amber"
              data-umami-event="source_click"
            >
              Source on GitHub
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
