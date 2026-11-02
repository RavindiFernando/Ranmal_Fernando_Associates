import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-3 md:top-5 inset-x-0 z-[9999] flex justify-center px-3 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "bg-surface-dark/90 shadow-2xl shadow-black/30 py-2 pl-2.5 pr-2"
              : "bg-surface-dark/60 py-2.5 pl-3 pr-2.5"
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-3 pr-3 lg:pr-5 lg:mr-1.5 lg:border-r lg:border-white/10"
          >
            <span className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-primary2 flex items-center justify-center shrink-0">
              <img src="/images/logo.png" alt="RFA" className="h-6 md:h-7 w-auto" />
            </span>
            <span className="font-display italic font-semibold text-primary2 text-base md:text-lg xl:text-xl whitespace-nowrap">
              Ranmal Fernando Associates
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-3.5 xl:px-4 py-2.5 rounded-full text-[15px] xl:text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-primary2 text-primary"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden relative h-10 w-10 rounded-full bg-primary2 flex flex-col items-center justify-center gap-[5px] shrink-0"
          >
            <span
              className={`block h-[1.5px] w-4 bg-primary transition-all duration-300 ${
                isOpen ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-primary transition-all duration-300 ${
                isOpen ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[9998] bg-surface-dark bg-blueprint-dark transition-[clip-path] duration-700 [transition-timing-function:cubic-bezier(0.77,0,0.18,1)] ${
          isOpen
            ? "[clip-path:circle(150%_at_50%_2.5rem)]"
            : "[clip-path:circle(0%_at_50%_2.5rem)] pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-between px-8 pt-28 pb-10">
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li
                key={item.path}
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isOpen ? `${250 + i * 60}ms` : "0ms" }}
              >
                <Link
                  to={item.path}
                  className="group flex items-baseline gap-4 py-2"
                >
                  <span className="font-mono text-xs text-primary2/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-4xl sm:text-5xl font-semibold transition-colors duration-300 ${
                      isActive(item.path)
                        ? "text-primary2 italic"
                        : "text-white group-hover:text-primary2"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`space-y-3 transition-all duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "650ms" : "0ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary2/50">
              Get in touch
            </p>
            <a
              href="mailto:ranmalfrnnd@yahoo.com"
              className="flex items-center gap-2 text-lg text-white"
            >
              ranmalfrnnd@yahoo.com
              <ArrowUpRight className="h-4 w-4 text-primary2" />
            </a>
            <p className="text-white/60">+94 77 767 2713</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
