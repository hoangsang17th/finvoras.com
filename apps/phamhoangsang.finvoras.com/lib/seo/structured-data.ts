import { getLocalizedResumeData } from "@/lib/data/resume";

type Locale = "en" | "vi";

export function getPersonSchema(locale: Locale = "en") {
  const resume = getLocalizedResumeData(locale);
  const { personalInfo, socialLinks } = resume;

  const sameAs = [
    socialLinks.github,
    socialLinks.linkedin,
    socialLinks.twitter,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: personalInfo.website,
    image: personalInfo.avatarUrl,
    jobTitle: "Flutter Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Finvoras",
      url: "https://finvoras.com",
    },
    sameAs,
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Finvoras",
    url: "https://finvoras.com",
  };
}

export function getStructuredData(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(locale),
      getOrganizationSchema(),
    ],
  };
}
