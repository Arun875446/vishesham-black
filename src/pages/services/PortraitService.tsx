import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const portraitImages = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
];

const PortraitService = () => {
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
            Portrait Sessions
          </h1>
          <p className="text-xl text-gold/90 max-w-3xl mx-auto">
            Revealing the authentic beauty and personality within every
            individual
          </p>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-display font-semibold text-secondary mb-6">
              Capturing Your Unique Essence
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Portrait photography is about more than just taking a picture—it's
              about capturing the essence of who you are. Whether it's
              professional headshots, family portraits, or creative personal
              sessions, we work to bring out your natural beauty and personality
              in every frame.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Our portrait sessions are relaxed and collaborative. We take time
              to understand your vision, discuss styling and locations, and
              create an environment where you feel comfortable and confident.
              The result is a collection of images that truly represent you.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Session Types:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Professional headshots</li>
                  <li>• Family portraits</li>
                  <li>• Individual sessions</li>
                  <li>• Creative portraits</li>
                  <li>• Maternity photography</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Our Style:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Natural lighting preferred</li>
                  <li>• Comfortable, relaxed approach</li>
                  <li>• Authentic expressions</li>
                  <li>• Timeless editing style</li>
                  <li>• Multiple outfit options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="mb-16">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            Portrait Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portraitImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item image-hover group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Portrait photography ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="btn-primary-cinematic">
            Book Your Portrait Session
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PortraitService;
