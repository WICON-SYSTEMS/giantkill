import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "product" | "organization" | "website" | "breadcrumb" | "faq";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "product":
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          name: data.name || "Giant Kill Insecticide",
          description: data.description || "Powerful systemic and contact insecticide for capsid control",
          brand: {
            "@type": "Brand",
            name: "Giant Kill",
          },
          category: "Agricultural Pesticides",
          image: data.image || "/images/giant-kill-product.jpg",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: data.price || "Contact for pricing",
            priceCurrency: "XAF",
            seller: {
              "@type": "Organization",
              name: "VI MA Cameroon",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1",
          },
          review: data.reviews?.map((review: any) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: review.author,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating,
            },
            reviewBody: review.text,
          })) || [],
        };

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VI MA Cameroon",
          description: "Leading provider of agricultural pest control solutions in Cameroon",
          url: "https://giantkill.com",
          logo: "https://giantkill.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+237-680-503-113",
            contactType: "customer service",
            availableLanguage: ["English", "French"],
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Douala",
            addressCountry: "CM",
          },
          sameAs: [
            "https://facebook.com/giantkill",
            "https://twitter.com/giantkill",
          ],
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Giant Kill - Agricultural Solutions",
          description: "The best solution for capsid control and crop protection in Cameroon",
          url: "https://giantkill.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://giantkill.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.questions.map((faq: any) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
