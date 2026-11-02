import { Award, Building, Clock, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    icon: Award,
    value: "19+",
    label: "Years of Excellence",
    description: "Serving the engineering industry with distinction",
  },
  {
    icon: Building,
    value: "3000+",
    label: "Projects Completed",
    description: "Successfully delivered across various sectors",
  },
  {
    icon: Clock,
    value: "100%",
    label: "On-Time Delivery",
    description: "Meeting deadlines with precision",
  },
  {
    icon: Shield,
    value: "Zero",
    label: "Safety Incidents",
    description: "Committed to workplace safety excellence",
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the numbers
          stats.forEach((stat, index) => {
            const target = parseInt(stat.value) || 100;
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.floor(current);
                return newValues;
              });
            }, 40);
          });
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary/60 mb-4">
            <span className="h-px w-8 bg-primary/40" />
            01 / Track Record
            <span className="h-px w-8 bg-primary/40" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Proven Track Record of Excellence
          </h2>
          <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed px-4">
            Our achievements speak for themselves. With nearly two decades of experience and thousands of successful projects,
            we continue to set the standard in engineering excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-[480px] h-auto mx-auto">
              <img 
              src="/images/stats.jpg" 
              alt="Engineering Excellence" 
              className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="space-y-6 md:space-y-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-4 md:space-x-6 p-4 rounded-xl bg-primary2/50 transition-all duration-700 hover:bg-primary2 hover:shadow-lg group ${
                  isVisible 
                    ? 'transform translate-x-0 opacity-100' 
                    : 'transform translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                {/* Large number */}
                <div className="flex-shrink-0 w-32 sm:w-36 md:w-40">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-black bg-primary/75 bg-clip-text text-transparent leading-none whitespace-nowrap group-hover:scale-105 transition-transform duration-300">
                    {stat.value.includes('%') || stat.value === 'Zero' 
                      ? stat.value 
                      : `${animatedValues[index]}${stat.value.includes('+') ? '+' : ''}`
                    }
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {stat.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-2 md:mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 150}ms` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;