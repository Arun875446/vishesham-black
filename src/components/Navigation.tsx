// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const services = [
//   { name: 'Wedding Photography', path: '/services/wedding' },
//   { name: 'Baby Shoot', path: '/services/baby-shoot' },
//   { name: 'Corporate Events', path: '/services/corporate' },
//   { name: 'Parties & Celebrations', path: '/services/parties' },
//   { name: 'Portrait Sessions', path: '/services/portraits' },
// ];

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
//         isScrolled
//           ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant'
//           : 'bg-transparent'
//       )}
//     >
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="text-2xl md:text-3xl font-display font-bold text-gold">
//               Vishesham
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <Link
//               to="/"
//               className={cn(
//                 'text-sm font-medium transition-colors duration-300 hover:text-gold',
//                 location.pathname === '/' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={cn(
//                 'text-sm font-medium transition-colors duration-300 hover:text-gold',
//                 location.pathname === '/about' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               About Us
//             </Link>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//                 className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300"
//               >
//                 <span>Services</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>

//               <div
//                 className={cn(
//                   'absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-elegant transition-all duration-300',
//                   isServicesOpen
//                     ? 'opacity-100 visible translate-y-0'
//                     : 'opacity-0 invisible translate-y-2'
//                 )}
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <div className="py-2">
//                   {services.map((service) => (
//                     <Link
//                       key={service.name}
//                       to={service.path}
//                       className="block px-4 py-3 text-sm text-muted-foreground hover:text-gold hover:bg-muted/20 transition-colors duration-300"
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Link
//               to="/team"
//               className={cn(
//                 'text-sm font-medium transition-colors duration-300 hover:text-gold',
//                 location.pathname === '/team' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               Our Team
//             </Link>
//             <Link
//               to="/contact"
//               className={cn(
//                 'text-sm font-medium transition-colors duration-300 hover:text-gold',
//                 location.pathname === '/contact' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 text-muted-foreground hover:text-gold transition-colors duration-300"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={cn(
//             'lg:hidden overflow-hidden transition-all duration-300',
//             isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//           )}
//         >
//           <div className="py-4 space-y-4 border-t border-border">
//             <Link
//               to="/"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 'block py-2 text-sm font-medium transition-colors duration-300',
//                 location.pathname === '/' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 'block py-2 text-sm font-medium transition-colors duration-300',
//                 location.pathname === '/about' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               About Us
//             </Link>

//             <div className="space-y-2">
//               <div className="text-sm font-medium text-muted-foreground py-2">Services</div>
//               {services.map((service) => (
//                 <Link
//                   key={service.name}
//                   to={service.path}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block py-2 pl-4 text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
//                 >
//                   {service.name}
//                 </Link>
//               ))}
//             </div>

//             <Link
//               to="/team"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 'block py-2 text-sm font-medium transition-colors duration-300',
//                 location.pathname === '/team' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               Our Team
//             </Link>
//             <Link
//               to="/contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 'block py-2 text-sm font-medium transition-colors duration-300',
//                 location.pathname === '/contact' ? 'text-gold' : 'text-muted-foreground'
//               )}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";
// import "../Navigation.css";

// const services = [
//   { name: "Wedding Photography", path: "/services/wedding" },
//   { name: "Baby Shoot", path: "/services/baby-shoot" },
//   { name: "Corporate Events", path: "/services/corporate" },
//   { name: "Parties & Celebrations", path: "/services/parties" },
//   { name: "Portrait Sessions", path: "/services/portraits" },
// ];

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // sparkle animation script
//   useEffect(() => {
//     const rand = (min, max) =>
//       Math.floor(Math.random() * (max - min + 1)) + min;

//     const animate = (star) => {
//       star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
//       star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

//       star.style.animation = "none";
//       // trigger reflow
//       void star.offsetHeight;
//       star.style.animation = "";
//     };

//     const stars = document.getElementsByClassName("magic-star");
//     let index = 0;
//     const interval = 1000;

//     for (const star of stars) {
//       setTimeout(() => {
//         animate(star);
//         setInterval(() => animate(star), 1000);
//       }, index++ * (interval / 3));
//     }
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md border-b border-border shadow-elegant"
//           : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo with sparkle effect */}
//           <Link to="/" className="flex items-center space-x-3">
//             <h1 className="text-2xl md:text-3xl font-display font-bold">
//               <span className="magic relative inline-block">
//                 {/* sparkle stars */}
//                 <span className="magic-star absolute">
//                   <svg viewBox="0 0 512 512">
//                     <path d="M256 0l51 205h205l-166 122 64 205-166-122-166 122 64-205-166-122h205z" />
//                   </svg>
//                 </span>
//                 <span className="magic-star absolute">
//                   <svg viewBox="0 0 512 512">
//                     <path d="M256 0l51 205h205l-166 122 64 205-166-122-166 122 64-205-166-122h205z" />
//                   </svg>
//                 </span>
//                 <span className="magic-star absolute">
//                   <svg viewBox="0 0 512 512">
//                     <path d="M256 0l51 205h205l-166 122 64 205-166-122-166 122 64-205-166-122h205z" />
//                   </svg>
//                 </span>
//                 <span className="magic-text">Vishesham</span>
//               </span>
//             </h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <Link
//               to="/"
//               className={cn(
//                 "text-sm font-medium transition-colors duration-300 hover:text-gold",
//                 location.pathname === "/"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={cn(
//                 "text-sm font-medium transition-colors duration-300 hover:text-gold",
//                 location.pathname === "/about"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               About Us
//             </Link>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//                 className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300"
//               >
//                 <span>Services</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>

//               <div
//                 className={cn(
//                   "absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-elegant transition-all duration-300",
//                   isServicesOpen
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible translate-y-2"
//                 )}
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <div className="py-2">
//                   {services.map((service) => (
//                     <Link
//                       key={service.name}
//                       to={service.path}
//                       className="block px-4 py-3 text-sm text-muted-foreground hover:text-gold hover:bg-muted/20 transition-colors duration-300"
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Link
//               to="/team"
//               className={cn(
//                 "text-sm font-medium transition-colors duration-300 hover:text-gold",
//                 location.pathname === "/team"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               Our Team
//             </Link>
//             <Link
//               to="/contact"
//               className={cn(
//                 "text-sm font-medium transition-colors duration-300 hover:text-gold",
//                 location.pathname === "/contact"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 text-muted-foreground hover:text-gold transition-colors duration-300"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={cn(
//             "lg:hidden overflow-hidden transition-all duration-300",
//             isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           )}
//         >
//           <div className="py-4 space-y-4 border-t border-border">
//             <Link
//               to="/"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 "block py-2 text-sm font-medium transition-colors duration-300",
//                 location.pathname === "/"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 "block py-2 text-sm font-medium transition-colors duration-300",
//                 location.pathname === "/about"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               About Us
//             </Link>

//             <div className="space-y-2">
//               <div className="text-sm font-medium text-muted-foreground py-2">
//                 Services
//               </div>
//               {services.map((service) => (
//                 <Link
//                   key={service.name}
//                   to={service.path}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block py-2 pl-4 text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
//                 >
//                   {service.name}
//                 </Link>
//               ))}
//             </div>

//             <Link
//               to="/team"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 "block py-2 text-sm font-medium transition-colors duration-300",
//                 location.pathname === "/team"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               Our Team
//             </Link>
//             <Link
//               to="/contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={cn(
//                 "block py-2 text-sm font-medium transition-colors duration-300",
//                 location.pathname === "/contact"
//                   ? "text-gold"
//                   : "text-muted-foreground"
//               )}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import "../Navigation.css";

const services = [
  { name: "Wedding Photography", path: "/services/wedding" },
  { name: "Baby Shoot", path: "/services/baby-shoot" },
  { name: "Corporate Events", path: "/services/corporate" },
  { name: "Parties & Celebrations", path: "/services/parties" },
  { name: "Portrait Sessions", path: "/services/portraits" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // run once on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // sparkle animation script
  useEffect(() => {
    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      star.style.animation = "none";
      // trigger reflow
      void star.offsetHeight;
      star.style.animation = "";
    };

    const stars = document.getElementsByClassName("magic-star");
    let index = 0;
    const interval = 1000;

    for (const star of stars) {
      setTimeout(() => {
        animate(star);
        setInterval(() => animate(star), 1000);
      }, index++ * (interval / 3));
    }
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled || isMobileMenuOpen || location.pathname === "/" // 👈 keep bg when menu is open
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-elegant"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with sparkle effect */}
          <Link to="/" className="flex items-center space-x-3">
            <h1 className="text-2xl md:text-3xl font-display font-bold">
              <span className="magic relative inline-block">
                {/* sparkle stars */}
                <span className="magic-star absolute">
                  <svg viewBox="0 0 512 512">
                    <path d="M256 0l51 205h205l-166 122 64 205-166-122-166 122 64-205-166-122h205z" />
                  </svg>
                </span>
                <span className="magic-star absolute">
                  <svg viewBox="0 0 512 512">
                    <path d="M256 0l51 205h205l-166 122 64 205-166-122-166 122 64-205-166-122h205z" />
                  </svg>
                </span>
                <span className="magic-star absolute">
                  <svg viewBox="0 0 512 512">
                    <path d="M256 0l51 205h205l-166 122 64 205-166-122-166 122 64-205-166-122h205z" />
                  </svg>
                </span>
                <span className="magic-text">Vishesham</span>
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold",
                location.pathname === "/"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold",
                location.pathname === "/about"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-elegant transition-all duration-300",
                  isServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                )}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-muted-foreground hover:text-gold hover:bg-muted/20 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/team"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold",
                location.pathname === "/team"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-gold",
                location.pathname === "/contact"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-97 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-4 border-t border-border">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-2 text-sm font-medium transition-colors duration-300",
                location.pathname === "/"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-2 text-sm font-medium transition-colors duration-300",
                location.pathname === "/about"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              About Us
            </Link>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground py-2">
                Services
              </div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 pl-4 text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/team"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-2 text-sm font-medium transition-colors duration-300",
                location.pathname === "/team"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-2 text-sm font-medium transition-colors duration-300",
                location.pathname === "/contact"
                  ? "text-gold"
                  : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
