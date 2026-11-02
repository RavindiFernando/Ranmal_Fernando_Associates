import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-surface-dark bg-blueprint-dark text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary2/60">
              <span className="h-px w-8 bg-primary2/40" />
              Start a project
            </p>
            <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight">
              Let's build
              <span className="block italic text-primary2">something lasting.</span>
            </h2>
            <a
              href="mailto:ranmalfrnnd@yahoo.com"
              className="group mt-10 inline-flex items-center gap-3 text-lg sm:text-2xl border-b border-white/20 pb-2 hover:border-primary2 hover:text-primary2 transition-colors duration-300"
            >
              ranmalfrnnd@yahoo.com
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pt-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary2/60 mb-5">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-primary2 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary2/60 mb-5">
                Visit
              </p>
              <address className="not-italic space-y-4 text-white/70 leading-relaxed">
                <p>
                  35 1/1, Sunethradevi Rd,
                  <br />
                  Nugegoda, Sri Lanka
                </p>
                <p>
                  <a href="tel:+94112827244" className="hover:text-primary2 transition-colors">
                    +94 11 282 7244
                  </a>
                  <br />
                  <a href="tel:+94777672713" className="hover:text-primary2 transition-colors">
                    +94 77 767 2713
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-24 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Ranmal Fernando Associates. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/ravindifernando/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-primary2 transition-colors"
            >
              Ravindi Fernando
            </a>
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 translate-y-[22%] pointer-events-none select-none font-display font-black text-outline leading-none text-[30vw] text-center"
      >
        RFA
      </div>
    </footer>
  );
};

export default Footer;
