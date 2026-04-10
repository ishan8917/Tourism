import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/hero_background.png" 
          alt="Coastal Mountain Landscape at Sunset" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <span className="inline-block text-gold-400 text-xs font-light uppercase tracking-[0.3em] mb-8">
            Exclusive Boutique Travel
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            An Elevation of <br className="hidden md:block" />
            <span className="italic text-gold-300 font-light">The Experience</span>
          </h1>
          <p className="text-sm md:text-base text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            We curate highly personal journeys for the discerning traveler. Step away from the ordinary and let us design a masterpiece itinerary exclusively for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-gold-400 text-black uppercase tracking-widest text-xs hover:bg-gold-300 transition-all flex items-center justify-center gap-4 group">
              Begin Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#destinations" className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white/50 transition-all">
              Discover Destinations
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
          <motion.div 
            className="w-full h-1/2 bg-gold-400 absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
