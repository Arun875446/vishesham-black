import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const weddingImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/33786302/pexels-photo-33786302.jpeg",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=400&fit=crop",
];

const WeddingService = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const description = descriptionRef.current;
    const gallery = galleryRef.current;

    if (!hero || !description || !gallery) return;

    gsap.fromTo(
      hero,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      description,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: description,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const galleryItems = gallery.querySelectorAll(".gallery-item");
    gsap.fromTo(
      galleryItems,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: gallery,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="pt-20 min-h-screen bg-gradient-section">
      <div className="container mx-auto px-6 py-20">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6">
            Wedding Photography
          </h1>
          <p className="text-xl text-gold/90 max-w-3xl mx-auto">
            Capturing the magic, emotion, and beauty of your special day
          </p>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-display font-semibold text-secondary mb-6">
              Your Love Story, Beautifully Told
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Your wedding day is one of the most important days of your life,
              and we understand the significance of preserving every precious
              moment. Our wedding photography captures not just the events, but
              the emotions, the intimate glances, the joyful tears, and the
              celebration of love that makes your day uniquely yours.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              We blend traditional posed portraits with candid photojournalistic
              moments, creating a comprehensive visual narrative of your wedding
              day. Our cinematic approach ensures that your photos feel like
              stills from a beautiful romantic film.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  What's Included:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pre-wedding consultation</li>
                  <li>• Full day coverage</li>
                  <li>• Professional editing</li>
                  <li>• Online gallery delivery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Our Style:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cinematic storytelling</li>
                  <li>• Natural, candid moments</li>
                  <li>• Elegant compositions</li>
                  <li>• Timeless editing approach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="mb-16">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            Our Wedding Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item image-hover group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Wedding photography ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="btn-primary-cinematic">
            Book Your Wedding Session
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WeddingService;
