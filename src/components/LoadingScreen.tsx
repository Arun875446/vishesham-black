// import { useEffect, useState } from 'react';
// import { Camera } from 'lucide-react';

// interface LoadingScreenProps {
//   onLoadingComplete: () => void;
// }

// const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       // Give time for fade out animation
//       setTimeout(onLoadingComplete, 500);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, [onLoadingComplete]);

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero transition-opacity duration-500 ${
//         isVisible ? 'opacity-100' : 'opacity-0'
//       }`}
//     >
//       <div className="text-center space-y-6">
//         <div className="camera-loading">
//           <Camera className="w-20 h-20 text-gold mx-auto" />
//         </div>
//         <div className="space-y-2">
//           <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary">
//             Vishesham
//           </h1>
//           <p className="text-gold/80 font-light tracking-wider">
//             Photography Studio
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import "./Loading.css";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black transition-opacity duration-500 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Floating doodle particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/70 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        ></span>
      ))}

      <div className="text-center space-y-6 relative z-10">
        <div className="animate-pulse-scale">
          <Camera className="w-20 h-20 text-gold mx-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-display font-bold animate-fadeUp bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradientFlow">
            Vishesham
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider animate-fadeUp delay-200 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent animate-gradientFlow">
            Photography Studio
          </p>
        </div>
      </div>

      {/* Extra moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent animate-gradientMove"></div>
    </div>
  );
};

export default LoadingScreen;
