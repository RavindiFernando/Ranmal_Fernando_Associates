import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setIsVisible(true);
            } else if (entry.target === ctaRef.current) {
              setCtaVisible(true);
            }
          }
        });
      },
      observerOptions
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients and stakeholders to achieve shared goals and sustainable outcomes."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing cutting-edge technology and methodologies to solve complex engineering challenges."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Looking ahead to create infrastructure that serves communities for generations to come."
    }
  ];

  

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/5"
        style={{
          backgroundImage: "url('/images/services-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary2/90 text-primary text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-1000 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          What We Do
        </span>
        <h1 className="text-5xl font-bold text-white animate-fade-in-up">Our Services</h1>
        <p className="text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          At Ranmal Fernando Associates, we provide reliable structural engineering solutions that ensure every project is safe, efficient, and built to last.
        </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark/80 via-primary/40 to-surface-dark/70 pointer-events-none" />
      </section>

    <ServicesSection />

    {/* CTA Section */}
          <section ref={ctaRef} className="py-20 bg-gradient-to-br from-primary2/50 to-background">
            <div className={`container mx-auto px-4 text-center transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">Looking for expert structural solutions?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                Let's discuss how our engineering expertise can bring your vision to life.
              </p>
              <Button size="lg" className="text-lg font-semibold hover:scale-105 transition-transform duration-300 animate-fade-in-up animation-delay-500" asChild>
                <a href="/contact" >Get In Touch</a>
              </Button>
            </div>
          </section>

      

      

      <Footer />
    </div>
  );
};

export default Services;