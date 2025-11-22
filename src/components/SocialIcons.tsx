const SocialIcons = () => {
  return (
    <div className="hero-social-icons flex items-center justify-center gap-4 sm:hidden pt-6 pb-4">
      {/* Twitter/X */}
      <a
        href="https://x.com/banditabs"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        aria-label="Twitter"
      >
        <img
          src="/twitter logo.png"
          alt="Twitter"
          className="w-6 h-6 object-contain"
        />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/banditabs"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        aria-label="Telegram"
      >
        <img
          src="/TG LOGO .png"
          alt="Telegram"
          className="w-6 h-6 object-contain"
        />
      </a>

      {/* DexScreener */}
      <a
        href="https://dexscreener.com/abstract/0xef5e397aa9978281c381d61e0ae2024f5229f723"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        aria-label="DexScreener"
      >
        <img
          src="/dex logo.png"
          alt="DexScreener"
          className="w-6 h-6 object-contain"
        />
      </a>

      {/* CoinGecko */}
      <a
        href="https://www.coingecko.com/en/coins/luca-netz-s-dog"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        aria-label="CoinGecko"
      >
        <img
          src="/coingecko logo.png"
          alt="CoinGecko"
          className="w-6 h-6 object-contain"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
