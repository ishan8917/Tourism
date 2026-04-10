export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white/50 py-16 border-t border-primary-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
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
            <h4 className="text-white font-serif text-lg mb-6">Discover</h4>
            <ul className="space-y-4 font-light text-sm tracking-wide">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Philosophy</a></li>
              <li><a href="#destinations" className="hover:text-gold-400 transition-colors">Collections</a></li>
              <li><a href="#why-us" className="hover:text-gold-400 transition-colors">The Experience</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Inquire</a></li>
              <li><a href="/Tourism/dashboard" className="hover:text-gold-400 transition-colors">Agent Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4 font-light text-sm tracking-wide">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Experience</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest font-light text-white/40 uppercase">
          <p>&copy; {currentYear} WanderLuxe Boutique Travel.</p>
          <p>Designed with exacting standards.</p>
        </div>
      </div>
    </footer>
  );
}
