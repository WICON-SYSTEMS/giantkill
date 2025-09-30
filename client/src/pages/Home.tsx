import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MetaTags from "@/components/seo/MetaTags";
import StructuredData from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <MetaTags
        title="Giant Kill - The Ultimate Protection for Your Cocoa Crops"
        description="Giant Kill is a powerful systemic and contact regenerating insecticide - The best solution for capsid control. Trusted by over 1,000 farmers in Cameroon."
        keywords={[
          "giant kill",
          "capsid control",
          "cocoa farming",
          "agricultural insecticide",
          "pest control cameroon",
          "crop protection",
          "cocoa pest management",
          "agricultural solutions",
          "farm productivity",
          "cocoa yield",
        ]}
        url="/"
      />
      <StructuredData
        type="website"
        data={{}}
      />
      <StructuredData
        type="organization"
        data={{
          name: "VI MA Cameroon",
          description: "Leading provider of agricultural pest control solutions in Cameroon",
          url: "https://giantkill.com",
        }}
      />
      <PageLayout>
        <Hero />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Contact />
      </PageLayout>
    </>
  );
}
