import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Shield, Award, Star, Lightbulb, UserCheck, Calendar, Building2  } from "lucide-react";
import { useState, useEffect, useRef } from "react";
const founderImage = "/images/founder.jpg"; // public/images/founder.jpg


const About = () => {
  const [storyVisible, setStoryVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    if (!storyVisible) return;
    let current = 0;
    const target = 3000;
    const timer = setInterval(() => {
      current += target / 40;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setProjectCount(Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, [storyVisible]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === storyRef.current) {
              setStoryVisible(true);
            } else if (entry.target === valuesRef.current) {
              setValuesVisible(true);
            }
          }
        });
      },
      observerOptions
    );

    if (storyRef.current) observer.observe(storyRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Ensuring every design and project prioritizes the safety of people and structures."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Delivering honest, transparent, and ethical engineering solutions."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Commitment to high standards in design, execution, and supervision."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Applying modern techniques and creative solutions to solve structural challenges."
    },
    {
      icon: UserCheck,
      title: "Client Focus",
      description: "Placing the needs and goals of our clients at the forefront of every project."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Professional Engineers License",
    "LEED Accredited Professional",
    "Project Management Professional (PMP)",
    "Structural Engineering Certification"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        eyebrow="Since 2007"
        title="About Us"
        description="At Ranmal Fernando Associates, we provide reliable and innovative structural engineering solutions, guiding projects from concept to completion with safety, efficiency, and durability at the core."
        image="/images/about-bg.jpg"
      />

      {/* Story Section */}
      <section ref={storyRef} className="py-20">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 ${
          storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="flex items-center gap-4">
            <span className="h-10 w-1.5 rounded-full bg-primary" />
            <h2 className="text-4xl font-bold text-primary">Our Story</h2>
          </div>
          <p className="text-xl text-primary font-medium leading-relaxed">
            Founded in February 2007 by Eng. Ranmal Fernando, RFA has grown into a premier
            structural and civil engineering firm built on a distinguished 17-year engineering career.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Following roles as a site engineer and project engineer at the State Engineering
            Corporation, and later as Chief Engineer at Kelsey Developments Pvt Ltd, Eng. Fernando
            built RFA around structural design, project management, retrofitting of existing
            buildings, and value engineering.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Over the years, RFA has grown significantly, undertaking numerous high-profile projects
            and expanding its team of experts. We collaborate closely with clients, architects, MEP
            engineers, and quantity surveyors to achieve comprehensive project outcomes across
            commercial buildings, mixed developments, housing schemes, apartments, hospitals,
            academic buildings, and large-scale factories.
          </p>

          <div className="flex flex-wrap items-center gap-8 mt-8">
            <div className={`flex items-center gap-3 transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
              <Calendar className="h-6 w-6 text-primary" strokeWidth={1.75} />
              <div>
                <h3 className="text-2xl font-bold text-primary leading-none">2007</h3>
                <p className="text-sm text-muted-foreground mt-1">Founded</p>
              </div>
            </div>
            <span className="h-10 w-px bg-border hidden sm:block" />
            <div className={`flex items-center gap-3 transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '650ms' }}>
              <Building2 className="h-6 w-6 text-primary" strokeWidth={1.75} />
              <div>
                <h3 className="text-2xl font-bold text-primary leading-none">{projectCount}+</h3>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative transition-all duration-1000 ${
          storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <div className="relative max-w-xs mx-auto">
            <div className="absolute -inset-2.5 rounded-[1.75rem] bg-primary2" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={founderImage}
                alt="Founder - Eng. Ranmal Fernando"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h5 className="text-lg font-semibold">Eng. Ranmal Fernando</h5>
                <p className="text-white/80 text-sm">Founder & Principal Engineer</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-primary2/30">
        <div className="container mx-auto px-4">
          <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group flex-1 flex flex-col items-center text-center transition-all duration-700 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${300 + index * 120}ms`,
                  marginTop: index % 2 === 1 ? undefined : "0px",
                }}
              >
                <div
                  className="hidden md:block w-full"
                  style={{ height: index % 2 === 1 ? "2.5rem" : "0px" }}
                />
                <div className="relative pt-2">
                  <span className="absolute -top-6 -right-10 text-7xl font-black text-primary/15 select-none z-0 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:rotate-6 group-hover:shadow-xl">
                    <value.icon className="h-7 w-7 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications */}
      {/* <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-bold text-primary">Certifications & Accreditations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and professional standards is validated by industry certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;