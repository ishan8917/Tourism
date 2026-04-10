import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary-900 border-y border-gold-400/20">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="images/hero_background.png"
          alt="Luxury background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold-400 text-xs font-light tracking-[0.3em] uppercase mb-8 block">
            Your Invitation
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 tracking-tight leading-tight">
            Elevate Your <br />
            <span className="italic text-gold-300 font-light">Next Chapter</span>
          </h2>
          <p className="text-base text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
            Allow us to architect a journey that transcends expectations. Limited consultations available for the upcoming season.
          </p>
          <a href="#contact" className="inline-block px-12 py-5 bg-gold-400 text-primary-900 font-light uppercase tracking-[0.2em] text-xs hover:bg-gold-300 transition-all border border-transparent hover:border-white shadow-2xl">
            Request an Itinerary
          </a>
        </motion.div>
      </div>
    </section>
  );
}
