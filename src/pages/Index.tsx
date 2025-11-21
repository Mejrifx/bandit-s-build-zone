import { motion } from "framer-motion";
import bgDesktop from "@/assets/bg-desktop.jpg";
import bgMobile from "@/assets/bg-mobile.jpg";
import { useEffect, useState } from "react";

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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl text-center">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.15)",
              color: "hsl(0, 0%, 100%)",
              WebkitTextStroke: "2px hsl(200, 30%, 25%)",
              paintOrder: "stroke fill",
            }}
          >
            <motion.span
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              BUILDING IN PROGRESS…
            </motion.span>
          </motion.h1>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            {/* Join Community Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cartoon-pink to-primary px-10 py-5 text-lg font-bold text-white shadow-soft transition-all duration-300 hover:shadow-hover sm:text-xl"
              style={{
                backgroundImage: "var(--gradient-button)",
              }}
            >
              <span className="relative z-10">Join Community</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>

            {/* Buy $BANDIT Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cartoon-mint to-secondary px-10 py-5 text-lg font-bold text-white shadow-soft transition-all duration-300 hover:shadow-hover sm:text-xl"
              style={{
                backgroundImage: "var(--gradient-secondary)",
              }}
            >
              <span className="relative z-10">Buy $BANDIT</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>

          {/* Decorative Dots Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex justify-center gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="h-3 w-3 rounded-full bg-primary"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
