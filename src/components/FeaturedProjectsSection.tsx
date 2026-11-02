import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import project1 from "@/assets/project1.jpeg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.webp";
import project6 from "@/assets/project6.jpg";

const featured = [
  {
    title: "Maalu Maalu Resort & Spa",
    location: "Passekudah Bay, Sri Lanka",
    year: "2011",
    image: project1,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Sugar Factory",
    location: "Siyambalanduwa, Sri Lanka",
    year: "2024",
    image: project3,
    span: "",
  },
  {
    title: "Kings Garden Residencies",
    location: "Colombo 5, Sri Lanka",
    year: "2020",
    image: project4,
    span: "",
  },
  {
    title: "SWP Eco Lodge",
    location: "Kandy, Sri Lanka",
    year: "2018",
    image: project6,
    span: "lg:col-span-2",
  },
];

const FeaturedProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-primary2/60 to-background">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-3">
            <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary/60">
              <span className="h-px w-8 bg-primary/40" />
              02 / Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Featured Projects
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              A selection of structures we've engineered, from boutique resorts
              to large-scale industrial facilities.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-primary font-medium text-base md:text-lg shrink-0"
          >
            View all projects
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 md:gap-6">
          {featured.map((project, index) => (
            <Link
              to="/projects"
              key={project.title}
              className={`relative overflow-hidden rounded-2xl group min-h-[220px] md:min-h-[260px] ${project.span} transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${150 + index * 120}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover animate-contained-zoom group-hover:[animation-play-state:paused] group-hover:scale-125 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

              <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>

              <div className="absolute bottom-0 left-0 p-5 md:p-6 text-white translate-y-1 group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-white/80 mt-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
