import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (

    <section ref={sectionRef} className="py-16 md:py-20 bg-surface-dark relative overflow-hidden">
      {/* Background image with transparency */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-bg.jpg" 
          alt="Call to Action Background" 
          className="w-full h-full object-cover opacity-20" 
          style={{ pointerEvents: 'none' }}
        />
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(120,_200,_255,_0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,_200,_120,_0.3)_0%,_transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Ready to Build Something Extraordinary?
          </h2>
          <p className={`text-lg md:text-xl text-white/85 mb-6 md:mb-8 leading-relaxed px-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Let's discuss how Ranmal Fernando Associates can bring your engineering 
            vision to life. Our team of experts is ready to deliver innovative solutions 
            tailored to your specific needs.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Button 
              size="lg" 
              className="bg-primary2 text-primary hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary2/60 text-primary2 hover:bg-primary2 hover:text-primary backdrop-blur-sm bg-primary2/10 transform hover:scale-105 transition-all duration-300 shadow-xl text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
              asChild
            >
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center justify-center gap-3 text-primary2 bg-primary2/15 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-primary2/25 transition-all duration-300 border border-primary2/20">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-lg">+94 77 767 2713</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary2 bg-primary2/15 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-primary2/25 transition-all duration-300 border border-primary2/20">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-lg">ranmalfrnnd@yahoo.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
