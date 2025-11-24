import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Petal = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100; // percentage
  const randomSize = 30 + Math.random() * 40; // 30-70px
  const duration = 8 + Math.random() * 12; // 8-20 seconds for natural fall
  const initialRotation = Math.random() * 360;
  const swayAmount = 20 + Math.random() * 30; // Horizontal sway like leaves
  
  return (
    <motion.div
      initial={{ 
        y: -100, 
        x: `${randomX}vw`, 
        opacity: 0, 
        rotate: initialRotation 
      }}
      animate={{
        y: "110vh",
        x: [
          `${randomX}vw`, 
          `${randomX + (Math.random() * swayAmount - swayAmount/2)}vw`, 
          `${randomX + (Math.random() * swayAmount - swayAmount/2)}vw`,
          `${randomX}vw`
        ],
        opacity: [0, 0.8, 0.8, 0],
        rotate: [
          initialRotation, 
          initialRotation + 180 + (Math.random() * 180),
          initialRotation + 360 + (Math.random() * 180),
          initialRotation + 540
        ],
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.4, 0, 0.6, 1], // Custom easing for natural leaf fall
        repeat: Infinity,
      }}
      className="absolute top-0 pointer-events-none z-0"
      style={{
        width: randomSize,
        height: randomSize,
      }}
    >
      <img
        src="/bandit-petal.png"
        alt=""
        className="w-full h-full object-contain"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
        }}
      />
    </motion.div>
  );
};

const FallingLeaves = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    // Create more petals for a richer effect (like leaves falling from a tree)
    setPetals(Array.from({ length: 30 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((i) => (
        <Petal key={i} delay={i * 0.8} />
      ))}
    </div>
  );
};

export default FallingLeaves;
