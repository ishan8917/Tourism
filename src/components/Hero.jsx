import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black selection:bg-white/20">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-60" 
        />
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[120px] opacity-40" 
        />
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="images/hero_background.png"
          alt="Coastal Mountain Landscape at Sunset"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="inline-block text-gold-400 text-sm font-bold uppercase tracking-[0.3em] mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
          >
            Exclusive Boutique Travel
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-sans text-white mb-8 leading-tight tracking-tight font-bold">
            An Elevation of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-white to-gold-400 font-semibold drop-shadow-sm">The Experience</span>
          </h1>
          
          <p className="text-sm md:text-lg text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            We curate highly personal journeys for the discerning traveler. Step away from the ordinary and let us design a masterpiece itinerary exclusively for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="relative overflow-hidden group w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-semibold tracking-wide text-sm transition-all flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
            >
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              Begin Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#destinations" 
              className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 text-white font-medium tracking-wide text-sm hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-md"
            >
              Discover Destinations
            </motion.a>
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
