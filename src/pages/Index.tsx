import { motion } from "framer-motion";
import bgDesktop from "@/assets/bg-desktop.jpg";
import bgMobile from "@/assets/bg-mobile.jpg";
import { useEffect, useState } from "react";
import CartoonButton from "@/components/CartoonButton";
import FallingLeaves from "@/components/FallingLeaves";
import gsap from "gsap";

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

  useEffect(() => {
    // Wait for next paint to prevent flash
    requestAnimationFrame(() => {
      const timeline = gsap.timeline();
      
      // Animate heading: slide up from 30px below and fade in
      timeline.from(
        ".hero-heading",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Animate buttons: fade in with scale-up and stagger
      timeline.from(
        ".hero-buttons a",
        {
          opacity: 0,
          y: 10,
          scale: 0.96,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5" // Start slightly before heading finishes
      );
    });
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
          <div className="mb-16 relative">
            <motion.h1
              animate={{
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-heading text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-xl will-change-transform"
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
          </div>

          {/* Buttons Container */}
          <div className="hero-buttons flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
