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
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/banditabs"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        aria-label="Telegram"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.97 9.335c-.145.658-.537.818-1.084.508l-3-2.21-1.446-1.364c-.24-.214-.562-.375-.562-.781l.01-2.6 5.56-5.022c.243-.214-.054-.333-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
      </a>

      {/* DexScreener */}
      <a
        href="https://dexscreener.com/abstract/0xef5e397aa9978281c381d61e0ae2024f5229f723"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        aria-label="DexScreener"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l8.5 4.25v8.1L12 20.8l-8.5-4.25v-8.1L12 4.2z"/>
          <path d="M12 12l-4-2v4l4 2 4-2v-4l-4 2z" fill="white"/>
        </svg>
      </a>

      {/* CoinGecko */}
      <a
        href="https://www.coingecko.com/en/coins/luca-netz-s-dog"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
        aria-label="CoinGecko"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-2.25 4.5v9h1.5V6h-1.5zm4.5 0v9h1.5V6h-1.5z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;

