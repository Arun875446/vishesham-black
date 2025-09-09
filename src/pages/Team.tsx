// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//   {
//     name: "Arjun Sharma",
//     role: "Lead Photographer",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
//     socials: {
//       instagram: "#",
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
//   {
//     name: "Priya Patel",
//     role: "Wedding Specialist",
//     image:
//       "https://images.pexels.com/photos/31024751/pexels-photo-31024751.jpeg",
//     socials: {
//       instagram: "#",
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
//   {
//     name: "Vikram Singh",
//     role: "Portrait Artist",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
//     socials: {
//       instagram: "#",
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
//   {
//     name: "Ananya Gupta",
//     role: "Event Photographer",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
//     socials: {
//       instagram: "#",
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
//   {
//     name: "Rohit Kumar",
//     role: "Creative Director",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
//     socials: {
//       instagram: "#",
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#",
//     },
//   },
// ];

// const Team = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const teamRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const hero = heroRef.current;
//     const team = teamRef.current;

//     if (!hero || !team) return;

//     gsap.fromTo(
//       hero,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );

//     const teamCards = team.querySelectorAll(".team-card");
//     gsap.fromTo(
//       teamCards,
//       { opacity: 0, y: 50, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: team,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <main className="pt-20 min-h-screen bg-gradient-section">
//       <div className="container mx-auto px-6 py-20">
//         <div ref={heroRef} className="text-center mb-16">
//           <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6">
//             Our Team
//           </h1>
//           <p className="text-xl text-gold/90 max-w-3xl mx-auto">
//             Meet the creative minds behind Vishesham Photography
//           </p>
//         </div>

//         <div ref={teamRef} className="team-grid">
//           {teamMembers.map((member, index) => (
//             <div key={member.name} className="team-card group">
//               <div className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-elegant">
//                 <div className="relative aspect-square overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

//                   {/* Social Icons */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="flex space-x-4">
//                       <a
//                         href={member.socials.instagram}
//                         className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
//                       >
//                         <Instagram className="w-5 h-5" />
//                       </a>
//                       <a
//                         href={member.socials.facebook}
//                         className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
//                       >
//                         <Facebook className="w-5 h-5" />
//                       </a>
//                       <a
//                         href={member.socials.twitter}
//                         className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
//                       >
//                         <Twitter className="w-5 h-5" />
//                       </a>
//                       <a
//                         href={member.socials.linkedin}
//                         className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
//                       >
//                         <Linkedin className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-display font-semibold text-secondary mb-2">
//                     {member.name}
//                   </h3>
//                   <p className="text-gold/80">{member.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Team;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "Lead Photographer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Wedding Specialist",
    image:
      "https://images.pexels.com/photos/31024751/pexels-photo-31024751.jpeg",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Vikram Singh",
    role: "Portrait Artist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ananya Gupta",
    role: "Event Photographer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Rohit Kumar",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    socials: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const team = teamRef.current;

    if (!hero || !team) return;

    gsap.fromTo(
      hero,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    const teamCards = team.querySelectorAll(".team-card");
    gsap.fromTo(
      teamCards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: team,
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
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gold/90 max-w-3xl mx-auto">
            Meet the creative minds behind Vishesham Photography
          </p>
        </div>

        <div ref={teamRef} className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card group">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-elegant">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-semibold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold/80 mb-4">{member.role}</p>

                  {/* ✅ Social Icons moved BELOW the role */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.socials.instagram}
                      className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.facebook}
                      className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    {/* <a
                      href={member.socials.twitter}
                      className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a> */}
                    <a
                      href={member.socials.linkedin}
                      className="p-3 bg-gold/20 backdrop-blur-sm rounded-full text-gold hover:bg-gold hover:text-primary transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;
