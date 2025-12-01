import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* FAQ Section */}
      <Faq />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
