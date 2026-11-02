import { Building2, ShieldCheck, Anchor, Info, ClipboardCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Building2,
    title: "Structural Engineering",
    description:
      "We deliver safe and innovative solutions for residential, commercial, and industrial projects, ensuring strength, durability, and cost-effectiveness.",
  },
  {
    icon: Anchor,
    title: "Foundation & Sub-Structure Engineering",
    description:
      "We design shallow and deep foundations, retaining walls, and basements to ensure stability and long-term reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Structural Assessments & Strengthening",
    description:
      "We assess existing buildings for safety and provide retrofitting and strengthening to extend their lifespan.",
  },
  {
    icon: ClipboardCheck,
    title: "Construction Supervision & Quality Control",
    description:
      "Our engineers handle site inspections, reinforcement checks, and compliance reviews to maintain quality and safety.",
  },
  {
    icon: Info,
    title: "Consultancy & Advisory",
    description:
      "We offer feasibility studies, cost-effective solutions, and support with approvals to guide projects smoothly.",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-2xl mb-14 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary bg-primary2 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4">
            Capabilities Built Around Your Structure
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = active === index;
            return (
              <div
                key={service.title}
                onMouseEnter={() => setActive(index)}
                onTouchStart={() => setActive(index)}
                className={`group relative grid grid-cols-[auto_1fr] md:grid-cols-[120px_auto_1fr] items-center gap-4 md:gap-8 px-4 md:px-6 py-6 md:py-8 rounded-xl cursor-default overflow-hidden transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* background fill sweeps in from the left on active */}
                <div
                  className={`absolute inset-0 bg-primary2/50 transition-transform duration-500 ease-out origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transformOrigin: "left" }}
                />

                <span
                  className={`relative hidden md:block text-5xl lg:text-6xl font-black tabular-nums transition-colors duration-500 ${
                    isActive ? "text-primary" : "text-primary/10"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                    isActive ? "bg-primary scale-110" : "bg-primary2"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 md:h-6 md:w-6 transition-colors duration-500 ${
                      isActive ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </div>

                <div className="relative min-w-0">
                  <h3 className="text-lg md:text-2xl font-bold text-primary leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
