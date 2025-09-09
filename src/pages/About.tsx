// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Eye, Camera, Award } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const hero = heroRef.current;
//     const content = contentRef.current;

//     if (!hero || !content) return;

//     gsap.fromTo(hero,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );

//     gsap.fromTo(content.children,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: content,
//           start: "top 80%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//     <main className="pt-20 min-h-screen bg-gradient-section">
//       <div className="container mx-auto px-6 py-20">
//         <div ref={heroRef} className="text-center mb-16">
//           <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6">
//             About Vishesham
//           </h1>
//           <p className="text-xl text-gold/90 max-w-3xl mx-auto">
//             Where Every Frame Tells a Story Worth Remembering
//           </p>
//         </div>

//         <div ref={contentRef} className="max-w-4xl mx-auto space-y-12">
//           <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant border border-transparent animate-gradient-border">
//             <div className="flex items-center space-x-4 mb-6">
//               <div className="p-3 rounded-full bg-gold/10 border border-gold/20">
//                 <Eye className="w-6 h-6 text-gold" />
//               </div>
//               <h2 className="text-3xl font-display font-semibold text-secondary">Our Vision</h2>
//             </div>
//             <p className="text-muted-foreground leading-relaxed text-lg">
//               At Vishesham Photography, we believe that photography is more than just capturing images—it's about
//               preserving emotions, celebrating connections, and creating visual narratives that stand the test of time.
//               Our cinematic approach combines technical excellence with artistic vision to deliver photographs that
//               feel like scenes from a beautiful film.
//             </p>
//           </div>

//           <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant border border-transparent animate-gradient-border-delayed">
//             <div className="flex items-center space-x-4 mb-6">
//               <div className="p-3 rounded-full bg-gold/10 border border-gold/20">
//                 <Camera className="w-6 h-6 text-gold" />
//               </div>
//               <h2 className="text-3xl font-display font-semibold text-secondary">Our Approach</h2>
//             </div>
//             <p className="text-muted-foreground leading-relaxed text-lg mb-4">
//               We specialize in a diverse range of photography services, from intimate wedding ceremonies to
//               corporate events, family portraits to creative shoots. Each project is approached with fresh
//               eyes and a commitment to understanding your unique story.
//             </p>
//             <p className="text-muted-foreground leading-relaxed text-lg">
//               Our team combines traditional photography techniques with modern technology and post-processing
//               artistry to create images that are both timeless and contemporary.
//             </p>
//           </div>

//           <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant border border-transparent animate-gradient-border-slow">
//             <div className="flex items-center space-x-4 mb-6">
//               <div className="p-3 rounded-full bg-gold/10 border border-gold/20">
//                 <Award className="w-6 h-6 text-gold" />
//               </div>
//               <h2 className="text-3xl font-display font-semibold text-secondary">Why Choose Us</h2>
//             </div>
//             <ul className="space-y-4 text-muted-foreground text-lg">
//               <li className="flex items-start space-x-3">
//                 <span className="text-gold">•</span>
//                 <span>Professional equipment and cinematic techniques</span>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <span className="text-gold">•</span>
//                 <span>Personalized service tailored to your vision</span>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <span className="text-gold">•</span>
//                 <span>Fast turnaround times with high-quality editing</span>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <span className="text-gold">•</span>
//                 <span>Comprehensive packages for all event types</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default About;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Camera, Award } from "lucide-react";
import "../AboutPage.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const tagline = taglineRef.current;
    const content = contentRef.current;

    if (!hero || !tagline || !content) return;

    // Split "About Vishesham" into spans per letter
    const letters = hero.querySelectorAll("span");

    gsap.from(letters, {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.08,
    });

    gsap.from(tagline, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 1,
    });

    // Scroll animation for content
    gsap.fromTo(
      content.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: content,
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1
            ref={heroRef}
            className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6 overflow-hidden"
          >
            {"About Vishesham".split("").map((char, i) => (
              <span key={i} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p
            ref={taglineRef}
            className="text-xl text-gold/90 max-w-3xl mx-auto"
          >
            Where Every Frame Tells a Story Worth Remembering
          </p>
        </div>

        {/* Content Blocks */}
        <div ref={contentRef} className="max-w-4xl mx-auto space-y-12">
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant border border-transparent animate-gradient-border">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-full bg-gold/10 border border-gold/20">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-secondary">
                Our Vision
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Vishesham Photography, we believe that photography is more than
              just capturing images—it's about preserving emotions, celebrating
              connections, and creating visual narratives that stand the test of
              time. Our cinematic approach combines technical excellence with
              artistic vision to deliver photographs that feel like scenes from
              a beautiful film.
            </p>
          </div>

          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant border border-transparent animate-gradient-border-delayed">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-full bg-gold/10 border border-gold/20">
                <Camera className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-secondary">
                Our Approach
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              We specialize in a diverse range of photography services, from
              intimate wedding ceremonies to corporate events, family portraits
              to creative shoots. Each project is approached with fresh eyes and
              a commitment to understanding your unique story.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our team combines traditional photography techniques with modern
              technology and post-processing artistry to create images that are
              both timeless and contemporary.
            </p>
          </div>

          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-elegant border border-transparent animate-gradient-border-slow">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-full bg-gold/10 border border-gold/20">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-secondary">
                Why Choose Us
              </h2>
            </div>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li className="flex items-start space-x-3">
                <span className="text-gold">•</span>
                <span>Professional equipment and cinematic techniques</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold">•</span>
                <span>Personalized service tailored to your vision</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold">•</span>
                <span>Fast turnaround times with high-quality editing</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold">•</span>
                <span>Comprehensive packages for all event types</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
