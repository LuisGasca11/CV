import { education, profile, technicalSkills } from "@/data/cv";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "MX",
    },
    url: profile.portfolio.href,
    sameAs: [profile.github.href, profile.portfolio.href],
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })),
    knowsAbout: technicalSkills.flatMap((group) => group.items),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
