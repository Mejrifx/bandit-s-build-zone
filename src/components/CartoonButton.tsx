import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CartoonButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const CartoonButton = ({ 
  variant = "primary", 
  children, 
  className,
  ...props 
}: CartoonButtonProps) => {
  const isPrimary = variant === "primary";
  
  return (
    <motion.a
      whileHover={{ 
        scale: 1.05, 
        rotate: isPrimary ? -2 : 2,
        y: -5 
      }}
      whileTap={{ scale: 0.95, y: 0 }}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl px-5 py-2.5 sm:px-8 sm:py-4 text-base sm:text-xl font-black tracking-wide text-white shadow-[0_4px_0_0_rgba(0,0,0,0.2)] sm:shadow-[0_8px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 active:shadow-none active:translate-y-1 sm:active:translate-y-2",
        isPrimary 
          ? "bg-gradient-to-b from-cartoon-pink to-primary hover:from-primary hover:to-cartoon-pink" 
          : "bg-gradient-to-b from-cartoon-mint to-secondary hover:from-secondary hover:to-cartoon-mint",
        className
      )}
      style={{
        textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -skew-x-12 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Bottom highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/10" />
    </motion.a>
  );
};

export default CartoonButton;

