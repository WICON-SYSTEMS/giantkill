import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Contact />
    </PageLayout>
  );
}
