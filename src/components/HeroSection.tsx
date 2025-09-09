// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import heroImage from '@/assets/hero-photography.jpg';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const hero = heroRef.current;
//     const image = imageRef.current;
//     const text = textRef.current;

//     if (!hero || !image || !text) return;

//     // Initial animation on load
//     gsap.set([text.children], { opacity: 0, y: 50 });
//     gsap.set(image, { scale: 1.2 });

//     const tl = gsap.timeline();

//     tl.to(image, {
//       scale: 1,
//       duration: 2,
//       ease: "power2.out"
//     })
//     .to(text.children, {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power2.out"
//     }, "-=1.5");

//     // Parallax effect on scroll
//     gsap.to(image, {
//       yPercent: -50,
//       ease: "none",
//       scrollTrigger: {
//         trigger: hero,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//     <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Parallax */}
//       <div
//         ref={imageRef}
//         className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-overlay" />

//       {/* Content */}
//       <div ref={textRef} className="relative z-10 text-center space-y-8 px-6">
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-secondary">
//           Vishesham
//         </h1>
//         <p className="text-xl md:text-2xl text-gold/90 font-light max-w-2xl mx-auto">
//           Capturing Life's Most Precious Moments with Cinematic Elegance
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
//           <button className="btn-primary-cinematic">
//             View Our Portfolio
//           </button>
//           <button className="btn-cinematic">
//             Book a Session
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import women from "../assets/women blanket.png";

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const indicatorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray<HTMLElement>(".panel");

//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current, // pin outer hero section
//           pin: true,
//           scrub: 1,
//           snap: 1 / (panels.length - 1),
//           end: () => `+=${window.innerWidth * (panels.length - 1)}`,
//           onUpdate: (self) => {
//             if (indicatorRef.current) {
//               gsap.to(indicatorRef.current, {
//                 opacity: self.progress < 0.1 ? 1 : 0,
//                 duration: 0.5,
//               });
//             }
//           },
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full overflow-hidden"
//     >
//       {/* Panels Container */}
//       <div className="panels-container flex h-full w-[400vw]">
//         <div className="panel h-screen w-screen">
//           <img
//             // src="https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg"
//             src="https://images.pexels.com/photos/19982600/pexels-photo-19982600.jpeg"
//             alt="Cinematic 1"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="panel h-screen w-screen">
//           <img
//             src="https://images.pexels.com/photos/32413036/pexels-photo-32413036.jpeg"
//             alt="Cinematic 2"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="panel h-screen w-screen">
//           <img
//             src="https://images.pexels.com/photos/13123461/pexels-photo-13123461.jpeg"
//             alt="Cinematic 3"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="panel h-screen w-screen">
//           <img
//             src="https://images.pexels.com/photos/6518885/pexels-photo-6518885.jpeg"
//             alt="Cinematic 4"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div
//         ref={indicatorRef}
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg animate-bounce"
//       >
//         ↓ Scroll
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1), // snap to each panel
          end: () => `+=${window.innerWidth * (panels.length - 1)}`,
          onUpdate: (self) => {
            if (indicatorRef.current) {
              gsap.to(indicatorRef.current, {
                opacity: self.progress < 0.1 ? 1 : 0,
                duration: 0.3,
              });
            }
          },
          // Make it mobile-friendly
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Panels Container */}
      <div className="panels-container flex h-full w-[400vw] touch-pan-x overflow-x-auto scroll-smooth">
        <div className="panel h-screen w-screen flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/19982600/pexels-photo-19982600.jpeg"
            alt="Cinematic 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="panel h-screen w-screen flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/32413036/pexels-photo-32413036.jpeg"
            alt="Cinematic 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="panel h-screen w-screen flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/13123461/pexels-photo-13123461.jpeg"
            alt="Cinematic 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="panel h-screen w-screen flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/6518885/pexels-photo-6518885.jpeg"
            alt="Cinematic 4"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg animate-bounce"
      >
        ↓ Scroll
      </div>
    </section>
  );
};

export default HeroSection;
