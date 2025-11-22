import { motion } from "framer-motion";
import bgDesktop from "@/assets/bg-desktop.jpg";
import bgMobile from "@/assets/bg-mobile.jpg";
import { useEffect, useState } from "react";
import CartoonButton from "@/components/CartoonButton";
import FallingLeaves from "@/components/FallingLeaves";
import SocialIcons from "@/components/SocialIcons";
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
      
      // Animate heading wrapper: slide up from below like it's behind the buttons
      timeline.to(
        ".hero-heading-wrapper",
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
        }
      );

      // Animate social icons: fade in with scale-up and stagger
      timeline.to(
        ".hero-social-icons a",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.8" // Start before heading finishes
      );

      // Animate buttons: fade in with scale-up and stagger
      timeline.to(
        ".hero-buttons a",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.3,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.2" // Start slightly before heading finishes
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
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-0">
        {/* Social Icons - Mobile Only */}
        <SocialIcons />
        
        <div className="w-full max-w-3xl text-center">
          
          {/* Animated Heading */}
          <div className="hero-heading-wrapper mb-16 relative">
            <motion.h1
              animate={{
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-bubble text-5xl font-normal tracking-wider sm:text-6xl md:text-7xl lg:text-8xl text-white will-change-transform"
              style={{
                textShadow: "8px 8px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.1)",
                WebkitTextStroke: "4px hsl(var(--primary))",
                paintOrder: "stroke fill",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                letterSpacing: "0.05em",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
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
                href="https://t.me/banditabs" 
                target="_blank" 
                variant="primary"
                className="w-auto max-w-[280px] sm:max-w-none sm:w-auto"
            >
              Join Community
            </CartoonButton>

            {/* Buy $BANDIT Button */}
            <CartoonButton 
                href="https://portal.abs.xyz/trade?buy=0x775fec18be7b2e71c1a20c22f89a697d07c04399&showBars=true&showHistory=true" 
                target="_blank"
                variant="secondary"
                className="w-auto max-w-[280px] sm:max-w-none sm:w-auto"
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
