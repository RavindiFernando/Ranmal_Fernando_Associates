import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Clock,
  Wallet,
  Users,
  GraduationCap,
  HeartHandshake,
  Mail,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const perks = [
  {
    icon: TrendingUp,
    title: "Real Project Experience",
    description:
      "Work on live structural projects from design through to site supervision, building a portfolio that matters.",
  },
  {
    icon: Clock,
    title: "Flexible Work Environment",
    description:
      "We trust our team with their time. Flexible hours and a culture that respects work-life balance.",
  },
  {
    icon: Wallet,
    title: "Competitive Salary",
    description:
      "Compensation that reflects your skill and commitment, reviewed as you grow with us.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Growth",
    description:
      "Learn directly from senior engineers with decades of industry experience across diverse sectors.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "A close-knit team of engineers, draftsmen, and site staff who support one another on every project.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Stability",
    description:
      "Join a firm with a 19+ year track record and a steady pipeline of diverse, meaningful projects.",
  },
];

const roles = [
  "Structural Engineers",
  "Civil Engineers",
  "Draftsmen (AutoCAD)",
  "Trainee Engineers",
];

const Careers = () => {
  const [copied, setCopied] = useState(false);
  const [perksVisible, setPerksVisible] = useState(false);
  const [applyVisible, setApplyVisible] = useState(false);
  const perksRef = useRef(null);
  const applyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === perksRef.current) setPerksVisible(true);
            else if (entry.target === applyRef.current) setApplyVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (perksRef.current) observer.observe(perksRef.current);
    if (applyRef.current) observer.observe(applyRef.current);

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ranmalfrnnd@yahoo.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <PageHero
        eyebrow="Join Our Team"
        title="Careers at RFA"
        description="Build your career alongside engineers who care about the craft. We're always looking for talented engineers and draftsmen ready to grow with us."
        image="/images/services-bg.webp"
      />

      {/* Why Work With Us */}
      <section ref={perksRef} className="py-20">
        <div className="container mx-auto px-4">
          <div
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-primary">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe great engineering comes from a team that's supported, challenged, and
              rewarded fairly.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
            {perks.map((perk, index) => (
              <div
                key={perk.title}
                className={`group flex items-baseline gap-4 md:gap-6 py-7 md:py-8 border-b border-primary2 transition-all duration-700 ${
                  index >= perks.length - 2 ? "md:border-b-0" : ""
                } ${index === perks.length - 1 ? "border-b-0" : ""} ${
                  perksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <perk.icon className="h-6 w-6 md:h-7 md:w-7 text-primary/30 shrink-0 translate-y-1 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-primary leading-snug">
                    {perk.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-1">
                    {perk.description}
                  </p>
                </div>
                <span className="hidden sm:block text-sm font-semibold text-primary/20 tabular-nums shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles + Apply */}
      <section ref={applyRef} className="py-20 bg-primary2/30">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-1000 ${
              applyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-primary">We're Looking For</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className="text-sm font-medium text-primary bg-white px-4 py-2 rounded-full shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              We're always happy to hear from motivated engineers and draftsmen. Send us your CV
              and a short note about what you're looking for. We'd love to learn more about you.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-lg font-semibold hover:scale-105 transition-transform duration-300" asChild>
                <a href="mailto:ranmalfrnnd@yahoo.com?subject=Career%20Application%20-%20Ranmal%20Fernando%20Associates">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us Your CV
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-white border border-primary2 rounded-full pl-4 pr-3 py-2.5 hover:bg-primary2/40 transition-colors duration-300"
              >
                ranmalfrnnd@yahoo.com
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
