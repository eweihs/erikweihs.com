import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

const description =
  "Erik Weihs is a Solution Architect and Engineering Lead in Amsterdam, building scalable web platforms and leading engineering teams at Talpa Network.";

export const metadata: Metadata = {
  metadataBase: new URL("https://erikweihs.com"),
  title: "Erik Weihs | Solution Architect & Engineering Lead",
  description,
  authors: [{ name: "Erik Weihs", url: "https://erikweihs.com/humans.txt" }],
  alternates: {
    canonical: "https://erikweihs.com",
  },
  openGraph: {
    type: "website",
    url: "https://erikweihs.com",
    siteName: "Erik Weihs",
    title: "Erik Weihs",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Weihs",
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://erikweihs.com/#website",
      url: "https://erikweihs.com/",
      name: "Erik Weihs",
      description: "Personal website of Erik Weihs, Solution Architect and Engineering Lead.",
      inLanguage: "en",
      publisher: { "@id": "https://erikweihs.com/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://erikweihs.com/#webpage",
      url: "https://erikweihs.com/",
      name: "Erik Weihs | Solution Architect & Engineering Lead",
      isPartOf: { "@id": "https://erikweihs.com/#website" },
      mainEntity: { "@id": "https://erikweihs.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://erikweihs.com/#person",
      name: "Erik Weihs",
      url: "https://erikweihs.com/",
      jobTitle: "Solution Architect & Engineering Lead",
      description:
        "Solution Architect and Engineering Lead specializing in scalable web platforms, cloud architecture, and engineering leadership.",
      worksFor: {
        "@type": "Organization",
        name: "Talpa Network",
        url: "https://www.talpa.com/",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Hochschule für Telekommunikation Leipzig (HfTL)",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor of Engineering",
        name: "Communications and Information Technology",
      },
      knowsAbout: [
        "Software Architecture",
        "Engineering Leadership",
        "Engineering Management",
        "Web Development",
        "Cloud Computing",
        "Amazon Web Services",
        "Next.js",
        "TypeScript",
        "Micro-frontends",
        "Video Streaming",
        "Audio Streaming",
      ],
      email: "hello@erikweihs.com",
      sameAs: ["https://www.linkedin.com/in/erik-weihs/", "https://github.com/eweihs"],
      mainEntityOfPage: { "@id": "https://erikweihs.com/#webpage" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans text-ink-muted">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {process.env.ENV === "prod" && (
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="9f039d73-ce80-48ee-9a5e-967594cf5e11"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
