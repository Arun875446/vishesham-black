import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const hero = heroRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!hero || !form || !info) return;

    gsap.fromTo(hero,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo([form, info],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: form,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-section">
      <div className="container mx-auto px-6 py-20">
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gold/90 max-w-3xl mx-auto">
            Let's create something beautiful together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef} className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-display font-semibold text-secondary mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-300 text-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-300 text-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-300 text-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-300 text-foreground resize-none"
                />
              </div>
              
              <button type="submit" className="btn-primary-cinematic w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
              <h2 className="text-3xl font-display font-semibold text-secondary mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/20 rounded-lg">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@vishesham.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/20 rounded-lg">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Location</h3>
                    <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
              <h2 className="text-2xl font-display font-semibold text-secondary mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gold/20 rounded-lg text-gold hover:bg-gold hover:text-primary transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-gold/20 rounded-lg text-gold hover:bg-gold hover:text-primary transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-gold/20 rounded-lg text-gold hover:bg-gold hover:text-primary transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-gold/20 rounded-lg text-gold hover:bg-gold hover:text-primary transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;