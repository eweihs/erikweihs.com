const projects = [
  {
    title: "A shared web platform",
    description:
      "Defined the architecture and led the implementation and migration of major consumer brands onto a shared web platform, improving development efficiency, increasing reliability, and reducing infrastructure costs.",
    detail: "KIJK.nl · Vandaag Inside · Hart van Nederland · Shownieuws",
  },
  {
    title: "A premium video API",
    description:
      "Designed and delivered a premium video API enabling secure content delivery, entitlement management, and integrated purchase flows across web, mobile, and connected TVs.",
  },
  {
    title: "Ideas into services",
    description:
      "Turned new ideas into in-house services: designed the proof of concept, onboarded the Web Engineering team, and made sure every one lived up to its promise.",
    detail: "AI app hosting · Toplist voting · Image transformation",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-16 space-y-10 border-t border-border py-16 md:py-20">
      <h2 className="font-display text-4xl font-bold text-ink md:text-[44px]">Selected work</h2>
      <ol className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.title} className="flex flex-col gap-4 rounded-md bg-paper-dark p-7">
            <span
              aria-hidden="true"
              className="font-display text-5xl leading-none font-bold text-amber"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-bold text-ink">{project.title}</h3>
            <p className="text-[15px] leading-relaxed">{project.description}</p>
            {project.detail && (
              <p className="mt-auto text-[13px] text-ink-faint">{project.detail}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
