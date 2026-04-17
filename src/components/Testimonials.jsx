import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'S. Mitchell',
    role: 'Private Client',
    content: 'WanderLuxe crafted an experience in the Maldives that surpassed all expectations. The level of personalization and absolute discretion is what you would expect from a top-tier luxury firm.',
  },
  {
    name: 'The Harrison Family',
    role: 'Private Client',
    content: 'They do not just book trips; they architect memories. Our alpine retreat was executed with flawless precision. Every dinner, every transfer—immaculate.',
  },
  {
    name: 'D. Reynolds',
    role: 'Private Client',
    content: 'I had never used a boutique firm before, but the difference is profound. The dedication they showed to my itinerary made me feel like their only client.',
  }
];

export default function Testimonials() {
  return (
    <section className="py-40 bg-[#020617] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-white/5 pb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-8 block drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]"
            >
              Endorsements
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight font-bold leading-tight"
            >
              Words From Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-300">Clients</span>
            </motion.h2>
          </div>
          <div className="text-white/50 font-serif italic max-w-xs text-right hidden md:block">
            "Excellence is not an act, but a habit."
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-10 bg-white/5 rounded-sm border border-white/5 shadow-2xl hover:bg-white/10 transition-colors duration-500"
            >
              <div className="text-gold-500/20 text-8xl font-serif leading-none absolute -top-10 -left-6 opacity-80 pointer-events-none">"</div>
              <p className="text-white/80 font-light text-lg leading-relaxed tracking-wide mb-10 z-10 relative">
                {test.content}
              </p>
              <div className="border-t border-white/10 pt-8">
                <h4 className="font-serif text-gold-400 text-xl tracking-wide font-medium mb-1">{test.name}</h4>
                <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium">{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
