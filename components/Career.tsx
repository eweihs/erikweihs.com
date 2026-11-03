const roles = [
  {
    period: "2023–Present",
    title: "Solution Architect & Lead Web Engineering",
    company: "Talpa Network",
    description: [
      "Leading the engineering team behind Talpa Network's consumer-facing websites, including KIJK.nl, Vandaag Inside, Hart van Nederland, Shownieuws, and its national radio brands.",
      "Beyond architecture, I focus on helping the team succeed: providing technical direction, coaching engineers, improving development practices, and aligning engineering decisions with product and business goals.",
    ],
    skills: [
      "Next.js",
      "AWS",
      "Micro-frontends",
      "Software Architecture",
      "Engineering Leadership",
    ],
  },
  {
    period: "2020–2023",
    title: "Solution Architect, Video",
    company: "Talpa Network",
    description: [
      "Worked closely with product and engineering teams to build scalable video experiences, improve streaming reliability, and evolve the underlying architecture.",
    ],
    skills: ["Next.js", "Video Streaming", "AWS", "CDN"],
  },
  {
    period: "2019–2020",
    title: "Technical Lead, Audio",
    company: "Talpa Network",
    description: [
      "Led the engineering team responsible for Talpa's audio streaming platform, supporting some of the Netherlands' largest radio brands.",
      "Focused on architecture, engineering standards, and building a reliable foundation for audio streaming across multiple products.",
    ],
    skills: ["Node.js", "React", "Audio Streaming", "AWS"],
  },
  {
    period: "2018–2019",
    title: "Full Stack Engineer",
    company: "Talpa Network",
    description: [
      "Developed the JUKE audio streaming platform and built voice applications for Amazon Alexa and Google Assistant, while using A/B testing to improve user engagement.",
    ],
    skills: ["React", "Node.js", "Alexa SDK", "A/B Testing"],
  },
  {
    period: "2017–2018",
    title: "Software Engineer",
    company: "Whereables B.V.",
    description: [
      "Developed the KiGO GPS watch platform for children, building cross-platform mobile apps, integrating payment services, and extending the backend API.",
    ],
    skills: ["Angular", "Cordova", "PHP", "iOS", "Android"],
  },
  {
    period: "2014–2017",
    title: "Frontend Developer",
    company: "Watcher Enterprises",
    description: [
      "Built web applications and hybrid mobile apps, focusing on performance, accessibility, and user experience.",
    ],
    skills: ["AngularJS", "Cordova", "JavaScript", "SEO"],
  },
  {
    period: "2009–2014",
    title: "Bachelor of Engineering (B.Eng.) in Communications and Information Technology",
    company: "Hochschule für Telekommunikation Leipzig (HfTL), University of Applied Sciences",
    description: [],
    skills: [],
  },
];

export default function Career() {
  return (
    <section id="career" className="scroll-mt-16 space-y-10 border-t border-border py-16 md:py-20">
      <h2 className="font-display text-4xl font-bold text-ink md:text-[44px]">Career</h2>
      <ol>
        {roles.map((role, index) => {
          const isCurrent = index === 0;

          return (
            <li
              key={role.period}
              className={`grid gap-x-10 gap-y-2 border-t-[3px] py-7 sm:grid-cols-[150px_minmax(0,1fr)] ${
                isCurrent ? "border-amber" : "border-border"
              }`}
            >
              <p className={`text-sm font-bold ${isCurrent ? "text-amber" : "text-ink-faint"}`}>
                {role.period}
              </p>
              <div className="space-y-3">
                <h3 className="text-lg leading-snug font-bold text-ink">
                  {role.title} <span className="font-normal text-ink-faint">· {role.company}</span>
                </h3>
                {role.description.map((paragraph) => (
                  <p key={paragraph} className="max-w-[68ch] text-[15px] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {role.skills.length > 0 && (
                  <ul className="flex flex-wrap gap-2 pt-1" aria-label="Skills">
                    {role.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-sm border border-border bg-paper-dark px-2 py-0.5 text-xs font-medium text-ink-light"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
