import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import StatsSection from "@/components/StatsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProcessSection from "@/components/ProcessSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Marquee />
      <StatsSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
