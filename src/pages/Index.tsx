import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
