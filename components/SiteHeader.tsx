"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "career", label: "Career" },
  { id: "outside", label: "Outside work" },
];

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

const linkClasses = "py-2 transition-colors duration-200 hover:text-amber";

// Sections without a nav item (the hero and About) clear the active link
function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(NAV_IDS.includes(entry.target.id) ? entry.target.id : null);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return isScrolled;
}

export default function SiteHeader() {
  const activeId = useActiveSection();
  const isScrolled = useIsScrolled();

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/85 backdrop-blur transition-colors duration-200 ${
        isScrolled ? "border-border" : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-8 py-2">
          <a
            href="#top"
            aria-label="Erik Weihs, back to top"
            className={`font-display text-[28px] leading-none font-bold text-ink ${linkClasses}`}
          >
            W
          </a>
          <nav
            aria-label="Sections"
            className="flex flex-wrap gap-x-7 text-sm font-medium text-ink-light"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "location" : undefined}
                className={`relative ${linkClasses} after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-200 aria-[current=location]:text-ink aria-[current=location]:after:scale-x-100`}
                data-umami-event="navigation_click"
                data-umami-event-section={item.id}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:hello@erikweihs.com"
              className="hidden py-2 text-amber transition-colors duration-200 hover:text-ink sm:inline"
              data-umami-event="contact_click"
              data-umami-event-method="email"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
