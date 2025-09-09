import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const babyImages = [
  "https://images.pexels.com/photos/32108680/pexels-photo-32108680.jpeg",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
  "https://images.pexels.com/photos/12665734/pexels-photo-12665734.jpeg",
  "https://images.pexels.com/photos/33653846/pexels-photo-33653846.jpeg",
  "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=400&h=400&fit=crop",
];

const BabyShootService = () => {
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
            Baby Photography
          </h1>
          <p className="text-xl text-gold/90 max-w-3xl mx-auto">
            Gentle captures of your little one's most precious early moments
          </p>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-display font-semibold text-secondary mb-6">
              Treasuring Early Moments
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Baby photography requires patience, gentleness, and a deep
              understanding of working with little ones. We specialize in
              creating a calm, comfortable environment where babies can be their
              natural selves while we capture their precious expressions, tiny
              details, and the overwhelming love that surrounds them.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              From newborn sessions in the first few weeks of life to milestone
              sessions as they grow, we focus on the small details that make
              each baby unique—their tiny fingers and toes, peaceful sleeping
              expressions, and the tender moments with parents.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Session Types:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Newborn photography</li>
                  <li>• Milestone sessions</li>
                  <li>• Family with baby</li>
                  <li>• Maternity & newborn combo</li>
                  <li>• First year packages</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Our Approach:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Baby's comfort comes first</li>
                  <li>• Flexible timing</li>
                  <li>• Gentle, patient approach</li>
                  <li>• Safety-first posing</li>
                  <li>• Natural, soft lighting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="mb-16">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            Baby Photography Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {babyImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item image-hover group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Baby photography ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="btn-primary-cinematic">
            Book Baby Photography Session
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BabyShootService;
