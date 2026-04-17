export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white/50 py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Massive Closing typography */}
        <div className="text-center mb-32 border-b border-white/10 pb-20">
          <h2 className="text-[12vw] leading-none font-serif text-white font-bold tracking-tight opacity-90 mix-blend-overlay">
            WANDER<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-200">LUXE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-20">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <span className="text-2xl tracking-widest font-serif text-white uppercase">
                Wander<span className="text-gold-400">Luxe</span>
              </span>
            </a>
            <p className="font-light text-sm max-w-sm mb-8 tracking-wide">
              Redefining travel with passion, transparency, and curated luxury. Your journey beyond the ordinary begins here.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs tracking-[0.2em] font-light uppercase hover:text-gold-400 transition-colors">Instagram</a>
              <a href="#" className="text-xs tracking-[0.2em] font-light uppercase hover:text-gold-400 transition-colors">Pinterest</a>
              <a href="#" className="text-xs tracking-[0.2em] font-light uppercase hover:text-gold-400 transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-2xl mb-8 font-bold">Discover</h4>
            <ul className="space-y-4 font-light text-base tracking-wide">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Philosophy</a></li>
              <li><a href="#destinations" className="hover:text-gold-400 transition-colors">Collections</a></li>
              <li><a href="#why-us" className="hover:text-gold-400 transition-colors">The Experience</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Inquire</a></li>
              <li><a href="/Tourism/dashboard" className="hover:text-gold-400 transition-colors">Agent Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-2xl mb-8 font-bold">Legal</h4>
            <ul className="space-y-4 font-light text-base tracking-wide">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors mb-4 block">Terms of Experience</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.3em] font-medium text-white/30 uppercase">
          <p>&copy; {currentYear} WanderLuxe Boutique Travel.</p>
          <p>Designed with <span className="text-gold-500/50">exacting</span> standards.</p>
        </div>
      </div>
    </footer>
  );
}
