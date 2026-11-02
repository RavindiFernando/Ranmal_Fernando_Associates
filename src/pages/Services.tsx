import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="At Ranmal Fernando Associates, we provide reliable structural engineering solutions that ensure every project is safe, efficient, and built to last."
        image="/images/services-bg.webp"
      />

      <Marquee />

      <ServicesSection />

      <Footer />
    </div>
  );
};

export default Services;
