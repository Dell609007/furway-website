export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Furway",
    url: "https://furway.app",
    logo: "https://furway.app/furway-logo-transparent-1024.png",
    description:
      "Furway is a community-driven platform dedicated to improving the lives of animals through community awareness, collaboration, and real-time information.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}