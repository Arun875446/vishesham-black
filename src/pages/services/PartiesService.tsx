import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const partyImages = [
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=600&fit=crop",
  "https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop",
];

const PartiesService = () => {
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
            Party Photography
          </h1>
          <p className="text-xl text-gold/90 max-w-3xl mx-auto">
            Capturing the energy, joy, and unforgettable memories of your
            celebrations
          </p>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-display font-semibold text-secondary mb-6">
              Celebrating Life's Special Moments
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Parties and celebrations are all about joy, connection, and
              creating memories that last a lifetime. Our party photography
              captures the energy, spontaneous moments, and genuine emotions
              that make each celebration unique. From birthday parties to
              anniversary celebrations, we document the laughter, surprises, and
              connections.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              We blend into the background while staying alert for those perfect
              moments—the surprise on someone's face, friends laughing together,
              the cutting of the cake, and all the little details that make your
              celebration special.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Event Types:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Birthday celebrations</li>
                  <li>• Anniversary parties</li>
                  <li>• Engagement parties</li>
                  <li>• Holiday gatherings</li>
                  <li>• Graduation parties</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Our Style:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Candid, fun approach</li>
                  <li>• High-energy documentation</li>
                  <li>• Group and individual shots</li>
                  <li>• Detail and atmosphere capture</li>
                  <li>• Quick social media previews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="mb-16">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            Party Photography Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partyImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item image-hover group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Party photography ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="btn-primary-cinematic">
            Book Party Photography
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PartiesService;
