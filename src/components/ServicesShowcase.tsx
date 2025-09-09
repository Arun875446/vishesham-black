import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Wedding",
    description:
      "Timeless moments of your special day captured with cinematic artistry & emotional depth.",
    path: "/services/wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
  },
  {
    title: "Corporate Events",
    description:
      "Professional event documentation that showcases your brand with sophistication.",
    path: "/services/corporate",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
  },
  {
    title: "Portrait Sessions",
    description:
      "Individual and family portraits that reveal the authentic beauty and personality within.",
    path: "/services/portraits",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
  },
  {
    title: "Baby Shoots",
    description:
      "Gentle, heartwarming captures of your little ones most precious early moments.",
    path: "/services/baby-shoot",
    image:
      "https://images.pexels.com/photos/33653846/pexels-photo-33653846.jpeg",
  },
  {
    title: "Parties & Celebrations",
    description:
      "Dynamic event photography that captures the energy, joy, and unforgettable memories.",
    path: "/services/parties",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
  },
];

const ServicesShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const servicesContainer = servicesRef.current;

    if (!section || !title || !servicesContainer) return;

    // Animate title
    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate service cards
    const serviceCards = servicesContainer.querySelectorAll(".service-card");
    serviceCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate moments to grand celebrations, we specialize in
            capturing the essence of every occasion with artistic vision and
            technical excellence.
          </p>
        </div>

        <div ref={servicesRef} className="photography-grid">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.path}
              className="service-card group block"
            >
              <div className="image-hover bg-card rounded-lg overflow-hidden shadow-elegant">
                <div className="aspect-[4/3] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-display font-semibold text-secondary group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
