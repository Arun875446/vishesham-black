// import { useState } from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoadingScreen from "./components/LoadingScreen";
// import Navigation from "./components/Navigation";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import WeddingService from "./pages/services/WeddingService";
// import CorporateService from "./pages/services/CorporateService";
// import PortraitService from "./pages/services/PortraitService";
// import BabyShootService from "./pages/services/BabyShootService";
// import PartiesService from "./pages/services/PartiesService";
// import NotFound from "./pages/NotFound";
// import ScrollToTop from "./components/ScrollToTop";

// const queryClient = new QueryClient();

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         {isLoading ? (
//           <LoadingScreen onLoadingComplete={handleLoadingComplete} />
//         ) : (
//           <BrowserRouter>
//             <ScrollToTop />
//             <Navigation />
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/services/wedding" element={<WeddingService />} />
//               <Route
//                 path="/services/corporate"
//                 element={<CorporateService />}
//               />
//               <Route path="/services/portraits" element={<PortraitService />} />
//               <Route
//                 path="/services/baby-shoot"
//                 element={<BabyShootService />}
//               />
//               <Route path="/services/parties" element={<PartiesService />} />
//               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         )}
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import WeddingService from "./pages/services/WeddingService";
import CorporateService from "./pages/services/CorporateService";
import PortraitService from "./pages/services/PortraitService";
import BabyShootService from "./pages/services/BabyShootService";
import PartiesService from "./pages/services/PartiesService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <BrowserRouter>
            <ScrollToTop />
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/wedding" element={<WeddingService />} />
              <Route
                path="/services/corporate"
                element={<CorporateService />}
              />
              <Route path="/services/portraits" element={<PortraitService />} />
              <Route
                path="/services/baby-shoot"
                element={<BabyShootService />}
              />
              <Route path="/services/parties" element={<PartiesService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
