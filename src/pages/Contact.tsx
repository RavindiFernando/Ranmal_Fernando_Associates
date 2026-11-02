import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast as sonnerToast } from "@/components/ui/sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const heroRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setIsVisible(true);
            } else if (entry.target === contactInfoRef.current) {
              setContactInfoVisible(true);
            } else if (entry.target === formRef.current) {
              setFormVisible(true);
            }
          }
        });
      },
      observerOptions
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_iul8jii', // Replace with your EmailJS service ID
      'template_qeh7oab', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        message: formData.message,
      },
      'h75v3Ktw5q1QKHAp7' // Replace with your EmailJS public key
    )
    .then(() => {
      sonnerToast.success("Message Sent!", {
        description: "Thank you for your inquiry. We'll get back to you soon.",
        duration: 6000, // stays longer
        position: "top-center", // more visible
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
      });
    })
    .catch(() => {
      sonnerToast.error("There was a problem sending your message. Please try again later.", {
        duration: 6000,
        position: "top-center"
      });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "35, 1/1 Sunethradevi Rd, Nugegoda, Sri Lanka"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+94 11 282 7244",
        "+94 77 767 2713"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "ranmalfrnnd@yahoo.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:30 PM",
        "Saturday - Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/5"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary2/90 text-primary text-xs md:text-sm font-semibold uppercase tracking-wide transition-all duration-1000 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Get In Touch
        </span>
        <h1 className="text-5xl font-bold text-white animate-fade-in-up">Contact Us</h1>
        <p className="text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Ready to discuss your engineering project? Our team of experts is here to
          provide consultation and turn your vision into reality.
        </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark/80 via-primary/40 to-surface-dark/70 pointer-events-none" />
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card
                ref={formRef}
                className={`p-8 transition-all duration-1000 hover:shadow-xl bg-primary2/30 border-primary2 ${
                  formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-3xl text-primary mb-2">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+94 77 123 4567"
                        />
                      </div>
                      <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder="e.g., Building Design"
                      />
                    </div>
                    </div>

                    

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      />
                    </div>

                    <Button type="submit" className="w-full group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      <Send className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div
              ref={contactInfoRef}
              className="rounded-2xl bg-primary2/30 border border-primary2 p-6 md:p-8"
            >
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`group relative flex items-start gap-5 transition-all duration-700 ${
                    contactInfoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  } ${index !== contactInfo.length - 1 ? 'pb-7' : ''}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* connecting line */}
                  {index !== contactInfo.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-primary/20" />
                  )}

                  <div className="relative shrink-0 h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <info.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                    <div className="space-y-0.5">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-primary2/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-primary">Visit Our Office</h2>

          </div>

          <Card className="overflow-hidden bg-white hover:shadow-xl transition-shadow duration-500">
            <div className="h-96">
              {/* 
                1. Go to Google Maps and find your location.
                2. Click "Share" -> "Embed a map".
                3. Copy the HTML and paste it here, replacing this comment and the iframe below.
              */}
              <iframe
                title="RFA Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.20959342065!2d79.88326717499605!3d6.865468593133127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a5a9dad462b%3A0x7a8b405015cbfd6f!2sRanmal%20Fernando%20Associates!5e0!3m2!1sen!2slk!4v1754459157504!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;