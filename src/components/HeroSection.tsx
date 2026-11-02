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

const slides = [
  { src: heroImage, alt: "Commercial Building Project" },
  { src: "/images/contact-bg.jpg", alt: "Engineering Consultation" },
  { src: "/images/bg.png", alt: "Bridge Engineering Project" },
  { src: "/images/services-bg.webp", alt: "Engineering Services" },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
      {/* Content */}
      <div className="relative z-20 w-full pt-28 pb-24 pointer-events-none">
        <div className="px-6 sm:px-10 lg:pl-16 xl:pl-24 w-full max-w-2xl pointer-events-auto">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary2/90 text-primary text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-1000 delay-150 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Structural Engineering Consultants
          </span>

          <h1
            className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Engineering
            <span className="block text-primary2">Excellence,</span>
            <span className="block">Within Reach.</span>
          </h1>

          <p
            className={`mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-md transition-all duration-1000 delay-500 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Ranmal Fernando Associates delivers trusted structural engineering
            solutions, combining innovation, precision, and expertise to
            build lasting structures.
          </p>

          <div
            className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="group bg-primary2 text-primary hover:bg-white text-base px-6 py-5 transition-all duration-300"
              asChild
            >
              <Link to="/services">
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent text-base px-6 py-5 transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>

          <div
            className={`mt-12 flex items-center gap-8 transition-all duration-1000 delay-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div>
              <div className="text-2xl font-bold text-primary2">19+</div>
              <div className="text-xs text-white/50 uppercase tracking-wide mt-0.5">Years</div>
            </div>
            <span className="h-8 w-px bg-white/15" />
            <div>
              <div className="text-2xl font-bold text-primary2">3000+</div>
              <div className="text-xs text-white/50 uppercase tracking-wide mt-0.5">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed background slideshow */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
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
          {slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover animate-contained-zoom"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/40 lg:hidden pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default HeroSection;
