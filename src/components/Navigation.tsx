import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`backdrop-blur-md border-b fixed top-0 w-full z-[9999] transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
      style={{ backgroundColor: "rgba(249, 246, 244, 0.85)" }}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center h-13 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="RFA Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-base md:text-xl font-bold italic text-primary">
              Ranmal Fernando Associates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-base lg:text-lg font-medium transition-colors hover:text-primary py-2 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                  isActive(item.path)
                    ? "text-primary after:w-full"
                    : "text-muted-foreground after:w-0 hover:after:w-full"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t flex flex-col space-y-1">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-primary/5 ${
                  isActive(item.path) ? "text-primary bg-primary/5" : "text-muted-foreground"
                } ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;