import { ClipboardList, Compass, Hammer, KeySquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Compass,
    title: "Consult",
    description:
      "We start by understanding your site, goals, and constraints through an in-depth consultation.",
  },
  {
    icon: ClipboardList,
    title: "Design",
    description:
      "Our engineers develop precise structural designs, balancing safety, cost, and buildability.",
  },
  {
    icon: Hammer,
    title: "Deliver",
    description:
      "We oversee execution closely, ensuring the design intent is carried through to the finished structure.",
  },
  {
    icon: KeySquare,
    title: "Handover",
    description:
      "A completed, certified structure handed over with full documentation and ongoing support.",
  },
];

const STEP_INTERVAL = 550;

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timers = steps.map((_, index) =>
      setTimeout(() => setActiveStep(index), 400 + index * STEP_INTERVAL)
    );
    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-primary2">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary bg-white px-3 py-1 rounded-full">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3">
            Our Process
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            A clear, structured path from first conversation to finished
            structure.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* connecting line, desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-border">
            <div
              className="h-px bg-primary transition-all ease-out"
              style={{
                width:
                  activeStep < 0
                    ? "0%"
                    : `${(activeStep / (steps.length - 1)) * 100}%`,
                transitionDuration: `${STEP_INTERVAL}ms`,
              }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const reached = activeStep >= index;
            return (
              <div
                key={step.title}
                className={`relative flex flex-col items-center text-center group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={`relative z-10 h-16 w-16 rounded-full flex items-center justify-center mb-5 shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1 ${
                    reached
                      ? "bg-primary border-2 border-primary scale-105"
                      : "bg-white border-2 border-primary/20"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 transition-all duration-500 group-hover:scale-110 ${
                      reached ? "text-primary-foreground" : "text-primary/40"
                    }`}
                  />
                  <span
                    className={`absolute -top-2 -right-2 h-6 w-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-500 ${
                      reached
                        ? "bg-primary2 text-primary scale-100"
                        : "bg-primary/30 text-primary-foreground scale-90"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3
                  className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-500 ${
                    reached ? "text-primary" : "text-primary/40"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm md:text-base leading-relaxed max-w-[220px] transition-colors duration-500 ${
                    reached ? "text-muted-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
