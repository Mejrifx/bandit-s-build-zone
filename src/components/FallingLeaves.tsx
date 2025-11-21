import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LeafSVG = ({ color, rotate }: { color: string; rotate: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    className="w-full h-full"
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <path d="M12,2 C12,2 4,8 4,14 C4,19 8,22 12,22 C16,22 20,19 20,14 C20,8 12,2 12,2 Z M12,22 C12,22 12,14 12,14" opacity="0.8" />
  </svg>
);

const Leaf = ({ delay }: { delay: number }) => {
  const colors = ["#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomX = Math.random() * 100; // percentage
  const randomSize = 20 + Math.random() * 30;
  const duration = 15 + Math.random() * 10;
  
  return (
    <motion.div
      initial={{ y: -100, x: `${randomX}vw`, opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        x: [`${randomX}vw`, `${randomX + (Math.random() * 10 - 5)}vw`, `${randomX}vw`],
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "linear",
        repeat: Infinity,
      }}
      className="absolute top-0 pointer-events-none z-0"
      style={{
        width: randomSize,
        height: randomSize,
      }}
    >
      <LeafSVG color={randomColor} rotate={Math.random() * 360} />
    </motion.div>
  );
};

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<number[]>([]);

  useEffect(() => {
    // Create an array of indices for leaves
    setLeaves(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {leaves.map((i) => (
        <Leaf key={i} delay={i * 2} />
      ))}
    </div>
  );
};

export default FallingLeaves;

