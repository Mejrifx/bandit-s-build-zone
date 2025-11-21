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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-0">
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
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-xl will-change-transform"
              style={{
                textShadow: "6px 6px 0px rgba(0,0,0,0.2)",
                WebkitTextStroke: "3px hsl(var(--primary))",
                paintOrder: "stroke fill",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            >
              BUILDING IN
              <br />
              PROGRESS…
            </motion.h1>
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
                href="https://t.me/banditabstract" 
                target="_blank" 
                variant="primary"
                className="w-full sm:w-auto"
            >
              Join Community
            </CartoonButton>

            {/* Buy $BANDIT Button */}
            <CartoonButton 
                href="https://portal.abs.xyz/trade?buy=0x775fec18be7b2e71c1a20c22f89a697d07c04399&showBars=true&showHistory=true" 
                target="_blank"
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
