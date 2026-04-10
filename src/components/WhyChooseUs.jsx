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
    <section id="why-us" className="py-32 bg-primary-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-gold-400 text-xs font-light tracking-[0.2em] uppercase mb-6 block">The Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            The New Standard in <br className="hidden md:block" />
            <span className="italic text-gold-300">Boutique</span> Travel
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-gold-500 font-serif text-3xl mb-6 relative">
                 {feature.number}
                 <div className="absolute top-1/2 -right-4 w-12 h-[1px] bg-gold-500/30 shrink-0" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed tracking-wide">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
