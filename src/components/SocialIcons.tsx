import { motion } from "framer-motion";

const SocialIcons = () => {
  const iconVariants = [
    { gradient: "from-cartoon-pink to-primary", rotate: -2 },
    { gradient: "from-cartoon-mint to-secondary", rotate: 2 },
    { gradient: "from-cartoon-pink to-primary", rotate: -2 },
    { gradient: "from-cartoon-mint to-secondary", rotate: 2 },
  ];

  const socialLinks = [
    {
      href: "https://x.com/banditabs",
      label: "Twitter",
      image: "/twitter logo.png",
      variant: 0,
    },
    {
      href: "https://t.me/banditabs",
      label: "Telegram",
      image: "/TG LOGO .png",
      variant: 1,
    },
    {
      href: "https://dexscreener.com/abstract/0xef5e397aa9978281c381d61e0ae2024f5229f723",
      label: "DexScreener",
      image: "/dex logo.png",
      variant: 2,
    },
    {
      href: "https://www.coingecko.com/en/coins/luca-netz-s-dog",
      label: "CoinGecko",
      image: "/coingecko logo.png",
      variant: 3,
    },
  ];

  return (
    <div className="hero-social-icons flex items-center justify-center gap-4 sm:hidden pt-6 pb-4">
      {socialLinks.map((link, index) => {
        const variant = iconVariants[link.variant];
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              rotate: variant.rotate,
              y: -5,
            }}
            whileTap={{ scale: 0.95, y: 0 }}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b ${variant.gradient} shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 active:shadow-none active:translate-y-1 relative overflow-hidden group`}
            aria-label={link.label}
          >
            <span className="relative z-10">
              <img
                src={link.image}
                alt={link.label}
                className="w-6 h-6 object-contain"
                style={{
                  filter: "drop-shadow(1px 1px 0 rgba(0,0,0,0.2))",
                }}
              />
            </span>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 -skew-x-12 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/10 rounded-full" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
