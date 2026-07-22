export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Alpine Digital School",
    url: "https://www.alpinedigitalschool.edu.pk",
    logo: "https://www.alpinedigitalschool.edu.pk/images/logos/Alpine_Digital_School_Logo.png",
    image: "https://www.alpinedigitalschool.edu.pk/images/og-image.jpg",
    description:
      "Alpine Digital School provides modern education, digital learning, experienced teachers, and academic excellence.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}