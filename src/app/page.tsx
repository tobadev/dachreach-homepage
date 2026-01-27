import FaqsSection from "@/components/faqs-4";
import HowItWorks from "@/components/features-2";
import FeaturesSection from "@/components/features-8";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing";
import TestimonialsOne from "@/components/testimonials-1";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <FaqsSection />
      <TestimonialsOne />
      <Footer />
    </>
  );
}
