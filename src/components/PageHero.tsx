import { useEffect, useState } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

const PageHero = ({ eyebrow, title, description, image }: PageHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface-dark">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 lg:hidden pointer-events-none" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:pl-16 xl:pl-24 pt-28 pb-16">
        <div className="max-w-xl">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary2/90 text-primary text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-1000 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {eyebrow}
          </span>

          <h1
            className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {title}
          </h1>

          <p
            className={`mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-md transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
