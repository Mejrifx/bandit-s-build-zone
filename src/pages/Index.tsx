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
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
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
