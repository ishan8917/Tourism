import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'The Consultation',
    description: 'We begin with an in-depth conversation to understand your desires, travel history, and what defines luxury for you.'
  },
  {
    number: '02',
    title: 'The Blueprint',
    description: 'Our designers compile an initial lookbook and itinerary proposal, refined until it aligns perfectly with your vision.'
  },
  {
    number: '03',
    title: 'The Journey',
    description: 'Every detail is secured. You travel with complete peace of mind, supported by our 24/7 private concierge.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-primary-100">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-gold-500 text-xs font-light tracking-[0.2em] uppercase mb-6 block">Our Protocol</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-900 mb-6 tracking-tight">
            The Art of <span className="italic text-primary-600">Creation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-primary-200" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative text-center bg-white px-2"
            >
              <div className="text-gold-500 font-serif text-4xl mb-8 relative z-10 bg-white inline-block px-4">
                {step.number}
              </div>
              <h3 className="text-xl font-serif text-primary-900 mb-4">{step.title}</h3>
              <p className="text-primary-600 font-light leading-relaxed text-sm tracking-wide">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
