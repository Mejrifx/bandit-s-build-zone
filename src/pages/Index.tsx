import { motion } from "framer-motion";
import bgDesktop from "@/assets/bg-desktop.jpg";
import bgMobile from "@/assets/bg-mobile.jpg";
import { useEffect, useState } from "react";
import CartoonButton from "@/components/CartoonButton";
import FallingLeaves from "@/components/FallingLeaves";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-display">
      {/* Background Image - UNTOUCHED */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
        }}
      />
      
      {/* Falling Leaves Atmosphere */}
      <FallingLeaves />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl text-center">
          
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="mb-16 relative"
          >
             <motion.h1
              animate={{
                rotate: [-2, 2, -2],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-xl"
              style={{
                textShadow: "6px 6px 0px rgba(0,0,0,0.2)",
                WebkitTextStroke: "3px hsl(var(--primary))",
                paintOrder: "stroke fill",
              }}
            >
              BUILDING IN
              <br />
              PROGRESS…
            </motion.h1>
            
            {/* Decorative sparkle/elements */}
            <motion.div 
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-12 h-12 text-yellow-300"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
            </motion.div>
            <motion.div 
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 text-cartoon-mint"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
            </motion.div>
          </motion.div>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            {/* Join Community Button */}
            <CartoonButton 
                href="https://t.me/BanditOnSol" 
                target="_blank" 
                variant="primary"
                className="w-full sm:w-auto"
            >
              Join Community
            </CartoonButton>

            {/* Buy $BANDIT Button */}
            <CartoonButton 
                href="#" 
                variant="secondary"
                className="w-full sm:w-auto"
            >
              Buy $BANDIT
            </CartoonButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
