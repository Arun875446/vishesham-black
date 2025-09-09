import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const corporateImages = [
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop'
];

const CorporateService = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const description = descriptionRef.current;
    const gallery = galleryRef.current;

    if (!hero || !description || !gallery) return;

    gsap.fromTo(hero,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(description,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: description,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    const galleryItems = gallery.querySelectorAll('.gallery-item');
    gsap.fromTo(galleryItems,
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
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
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
            Corporate Events
          </h1>
          <p className="text-xl text-gold/90 max-w-3xl mx-auto">
            Professional event documentation that elevates your brand image
          </p>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-display font-semibold text-secondary mb-6">
              Professional Corporate Photography
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Your corporate events deserve photography that matches your brand's professionalism 
              and vision. We specialize in capturing conferences, product launches, team meetings, 
              award ceremonies, and corporate gatherings with a sophisticated eye for detail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Our approach combines formal event documentation with candid moments that showcase 
              your company culture, team dynamics, and the energy of your corporate events. Every 
              image is crafted to reinforce your brand identity and professional excellence.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Services Include:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Conference photography</li>
                  <li>• Product launch events</li>
                  <li>• Team building activities</li>
                  <li>• Award ceremonies</li>
                  <li>• Executive portraits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Our Approach:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Discreet documentation</li>
                  <li>• Brand-consistent editing</li>
                  <li>• Quick turnaround times</li>
                  <li>• High-resolution delivery</li>
                  <li>• Social media ready formats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="mb-16">
          <h2 className="text-4xl font-display font-bold text-secondary text-center mb-12">
            Corporate Event Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item image-hover group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Corporate event photography ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="btn-primary-cinematic">
            Book Corporate Event Coverage
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CorporateService;