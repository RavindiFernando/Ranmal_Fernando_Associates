import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MapPin, Eye } from "lucide-react";
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
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % 9);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px'
    };

    let observer: IntersectionObserver;

    // Small delay to ensure elements are properly mounted
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === projectsRef.current) {
                setProjectsVisible(true);
              }
            }
          });
        },
        observerOptions
      );

      if (projectsRef.current) observer.observe(projectsRef.current);
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
    location: "Ethimale, Monaragala, Sri Lanka",
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
    title: "Tea Storage Building - Anverally and Sons",
    location: "Hendala, Wattala, Sri Lanka",
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


  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        eyebrow="Our Portfolio"
        title="Our Projects"
        description="Explore our portfolio of successful engineering projects that demonstrate our commitment to innovation, quality, and sustainable development."
        image="/images/projects-bg.jpg"
      />

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
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
            {projects.map((project, index) => {
              const isSpotlit = spotlightIndex === index;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 mb-4 md:mb-5 break-inside-avoid ${
                    projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`block w-full h-auto object-cover transition-transform [transition-duration:2000ms] ease-out group-hover:scale-105 ${
                      isSpotlit ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/95 ${
                      isSpotlit ? 'from-black/95' : ''
                    }`}
                  />

                  <div
                    className={`absolute top-3 right-3 md:top-4 md:right-4 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${
                      isSpotlit ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}
                  >
                    <Eye className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                    <h3 className="text-base md:text-xl font-bold leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs md:text-sm text-white/80 mt-1">
                      <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>
                    <p
                      className={`text-xs md:text-sm text-white/80 leading-relaxed mt-2 overflow-hidden transition-all duration-500 line-clamp-2 group-hover:max-h-20 group-hover:opacity-100 ${
                        isSpotlit ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedId(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl">
          {selectedProject && (
            <>
              <div className="relative h-72">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-white/80 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {selectedProject.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
                <Button className="w-full sm:w-auto" asChild>
                  <a href="/contact">Discuss a Similar Project</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;