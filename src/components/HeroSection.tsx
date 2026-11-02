import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-engineering.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "./HeroSectionSwiper.css";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}

      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false
          }}
          loop={true}
          loopAdditionalSlides={1}
          allowTouchMove={true}
          navigation
          pagination={{ clickable: true }}
          initialSlide={0}
          speed={2000}
          watchSlidesProgress={true}
          className="w-full h-full hero-swiper"
        >
          <SwiperSlide>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroImage}
                alt="Commercial Building Project"
                className="w-full h-full object-cover animate-contained-zoom"
                style={{ minHeight: '100vh' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/contact-bg.jpg"
                alt="Engineering Consultation"
                className="w-full h-full object-cover animate-contained-zoom"
                style={{ minHeight: '100vh' }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/bg.png"
                alt="Bridge Engineering Project"
                className="w-full h-full object-cover animate-contained-zoom"
                style={{ minHeight: '100vh' }}
              />
            </div>
          </SwiperSlide>
          
          
          <SwiperSlide>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/services-bg.webp"
                alt="Engineering Services"
                className="w-full h-full object-cover animate-contained-zoom"
                style={{ minHeight: '100vh' }}
              />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      
      {/* Animated gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 pointer-events-none animate-pulse-slow z-10" />

           {/* Content with enhanced animations */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`text-white space-y-6 md:space-y-8 px-4 md:pl-8 lg:pl-24 xl:pl-32 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary2/90 text-primary text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-1000 delay-150 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Structural Engineering Consultants
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="inline-block animate-fade-in-up animation-delay-300">Engineering Excellence</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary2 animate-fade-in-up animation-delay-500">
                 Within Reach
              </span>
            </h1>
            <p className={`text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Ranmal Fernando Associates delivers trusted structural engineering solutions, combining innovation, precision, and expertise to build lasting structures.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground border-0 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-primary/25" 
                asChild
              >
                <Link to="/services">
                  View Our Services
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary2 text-primary2 hover:bg-primary2 hover:text-primary text-base md:text-lg px-6 md:px-8 py-4 md:py-6 backdrop-blur-sm bg-primary2/10 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                asChild
              >
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;