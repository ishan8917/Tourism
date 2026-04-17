import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    number: 'I.',
    title: 'Passion Over Volume',
    description: 'We limit the number of clients we take to ensure every single itinerary receives our absolute, undivided attention.'
  },
  {
    number: 'II.',
    title: 'The Concierge Approach',
    description: 'Direct access to your dedicated travel designer before, during, and after your journey. We are always by your side.'
  },
  {
    number: 'III.',
    title: 'Radical Transparency',
    description: 'No hidden fees or unrealistic promises. We believe trust is the absolute foundation of a true luxury experience.'
  },
  {
    number: 'IV.',
    title: 'Curated Elegance',
    description: 'We personally vet every accommodation, experience, and partner to ensure they meet our exacting standards.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-40 bg-[#020617] relative">
      {/* Background soft glow */ }
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-8 block drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]"
          >
            The Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight tracking-tight font-bold"
          >
            The New Standard in <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-400 to-gold-200 drop-shadow-md">Boutique</span> Travel
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 relative z-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 font-serif text-4xl mb-8 relative font-bold">
                 {feature.number}
                 <div className="absolute top-1/2 -right-4 w-12 h-[1px] bg-gold-500/20 shrink-0 origin-left scale-0 group-hover:scale-100 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 tracking-wide font-medium">{feature.title}</h3>
              <p className="text-white/60 font-light text-base leading-relaxed tracking-wide">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
