import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForroAnimation from "@/components/ForroAnimation";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        <ForroAnimation />

        {/* Core Services Grid */}
        <Services />

        {/* Why Choose Ouro Branco (Differentials & Quality Seals) */}
        <WhyChooseUs />

        {/* Executed Projects Showcase & Modal Gallery */}
        <Gallery />

        {/* How It Works (4 Easy Steps) */}
        <ProcessSteps />

        {/* Client Testimonials & Google Ratings */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Direct Contact & Rapid Form */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
