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
    <section className="py-32 bg-primary-900 relative border-t border-primary-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-primary-800 pb-12">
          <div>
            <span className="text-gold-400 text-xs font-light tracking-[0.2em] uppercase mb-4 block">Endorsements</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
              Words From Our <span className="italic text-gold-300">Clients</span>
            </h2>
          </div>
          <div className="text-white/50 font-serif italic max-w-xs text-right hidden md:block">
            "Excellence is not an act, but a habit."
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-gold-500 text-6xl font-serif leading-none absolute -top-8 -left-4 opacity-50">"</div>
              <p className="text-white/80 font-light leading-relaxed tracking-wide mb-8 z-10 relative">
                {test.content}
              </p>
              <div className="border-t border-primary-800 pt-6">
                <h4 className="font-serif text-white tracking-wide">{test.name}</h4>
                <span className="text-xs text-gold-400 uppercase tracking-widest">{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
