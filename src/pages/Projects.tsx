import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import project1 from "@/assets/project1.jpeg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.webp";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";
import project7 from "@/assets/project7.jpg";
import project8 from "@/assets/project8.jpg";
import project9 from "@/assets/project9.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    let observer: IntersectionObserver;

    // Small delay to ensure elements are properly mounted
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === heroRef.current) {
                setIsVisible(true);
              } else if (entry.target === projectsRef.current) {
                setProjectsVisible(true);
              } else if (entry.target === ctaRef.current) {
                setCtaVisible(true);
              }
            }
          });
        },
        observerOptions
      );

      if (heroRef.current) observer.observe(heroRef.current);
      if (projectsRef.current) observer.observe(projectsRef.current);
      if (ctaRef.current) observer.observe(ctaRef.current);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const projects = [
  {
    id: 1,
    title: "Maalu Maalu Resort & Spa",
    location: "Passekudah Bay, Sri Lanka",
    year: "2011",
    description: "An eco-friendly resort offering Ayurvedic spa treatments, an infinity pool, and spacious rooms with private balconies.",
    image: project1
  },
  {
    id: 2,
    title: "Hotel Rajarata",
    location: "Anuradhapura, Sri Lanka",
    year: "Not specified",
    description: "A 4-story hotel overlooking a reservoir, providing comfortable accommodations and amenities for travelers.",
    image: project2
  },
  {
    id: 3,
    title: "Sugar Factory Ethimale",
    location: "Siyambalanduwa, Sri Lanka",
    year: "2024",
    description: "A state-of-the-art sugar processing facility operating with mechanical farming methods and sustainable energy practices.",
    image: project3
  },
  
  {
    id: 4,
    title: "Kings Garden Residencies",
    location: "Colombo 5, Sri Lanka",
    year: "2020",
    description: "A residential development offering spacious two and three-bedroom apartments with modern amenities.",
    image: project4
  },
  
  {
    id: 5,
    title: "The Blackpool  Resort & Spa",
    location: "Nuwara Eliya, Sri Lanka",
    year: "Not specified",
    description: "A 4-star hotel offering luxury accommodations with a garden, library, outdoor pool, and international cuisine.",
    image: project5
  },
  {
    id: 6,
    title: "SWP Eco Lodge",
    location: "Kandy, Sri Lanka",
    year: "2018",
    description: "An environmentally conscious eco-lodge in Kandy offering sustainable accommodations and a serene natural setting for guests.",
    image: project6
  },
  {
    id: 7,
    title: "Tea Storage Building - Anverally Tea",
    location: "Colombo, Sri Lanka",
    year: "Not specified",
    description: "A facility designed for the storage of Ceylon tea, supporting the operations of a historic tea company.",
    image: project7
  },
  {
    id: 8,
    title: "Manjari",
    location: "Nugegoda, Sri Lanka",
    year: "Not specified",
    description: "A retail destination offering a wide range of products under one roof, including household items, kitchenware, and clothing.",
    image: project8
  },
  {
    id: 9,
    title: "Ampara Bus Stand",
    location: "Ampara, Sri Lanka",
    year: "Not specified",
    description: "A transportation infrastructure project involving the design and development of a bus stand in Ampara.",
    image: project9
  }
  
];


  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Design Phase":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/5"
        style={{
          backgroundImage: "url('/images/projects-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl font-bold text-white animate-fade-in-up">Our Projects</h1>
            <p className="text-xl text-neutral-50 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Explore our portfolio of successful engineering projects that demonstrate our 
              commitment to innovation, quality, and sustainable development.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </section>

      {/* 
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary">
            <div>
              <h3 className="text-4xl font-bold mb-2">300+</h3>
              <p className="text-primary/80">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">Rs.5B</h3>
              <p className="text-primary/80">Total Project Value</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-primary-/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`overflow-hidden hover:shadow-xl transition-all duration-700 hover:scale-105 group
                  ${
                    projectsVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }
                  sm:opacity-100 sm:translate-y-0`
                }
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-primary group-hover:text-primary/80 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
          <section ref={ctaRef} className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className={`container mx-auto px-4 text-center transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in-up">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                Let's discuss how our engineering expertise can bring your vision to life.
              </p>
              <Button size="lg" className="text-lg font-semibold hover:scale-105 transition-transform duration-300 animate-fade-in-up animation-delay-500" asChild>
                <a href="/contact" >Get In Touch</a>
              </Button>
            </div>
          </section>

      <Footer />
    </div>
  );
};

export default Projects;