import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Curated Journeys', href: '#destinations' },
    { name: 'The Experience', href: '#why-us' },
    { name: 'Inquire', href: '#contact' },
    { name: 'Agent Hub', href: 'http://localhost:3000/Tourism/dashboard/create-post' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-primary-900/95 backdrop-blur-md shadow-sm border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl tracking-widest font-serif text-white uppercase">
            Wander<span className="text-gold-400">Luxe</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs uppercase tracking-[0.2em] font-light transition-colors hover:text-gold-400 text-white/80">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-8 py-3 bg-transparent border border-gold-400/50 text-gold-400 uppercase tracking-widest text-xs hover:bg-gold-400 hover:text-black transition-all">
            Book Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-primary-900 flex flex-col pt-24 px-8"
          >
            <button className="absolute top-8 right-8 text-white/80" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-8 text-xl font-serif text-white tracking-widest">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="hover:text-gold-400 transition-colors uppercase border-b border-white/10 pb-4"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-8 px-6 py-4 text-center bg-gold-500 text-black uppercase tracking-widest text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Book Consultation
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
