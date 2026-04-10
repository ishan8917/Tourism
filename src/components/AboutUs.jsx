import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-primary-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5] max-h-[800px]">
              <img 
                src="/images/domestic_tour.png" 
                alt="Beautiful Landscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
            </div>
            
            {/* The Badge */}
            <div className="absolute -bottom-10 -right-10 bg-primary-900 text-gold-400 p-10 border border-gold-400/20 max-w-[280px] hidden sm:block">
               <div className="text-sm tracking-widest uppercase mb-4 font-light">A Boutique Promise</div>
               <div className="font-serif text-2xl italic leading-snug text-white">Trust is earned in the details we carefully perfect.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-10"
          >
            <span className="text-gold-500 text-xs font-light tracking-[0.2em] uppercase mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-900 mb-8 leading-tight">
              Crafted for the <br />
              <span className="italic text-primary-600">Discerning</span> Traveler
            </h2>
            <div className="space-y-8 text-primary-600 text-[15px] leading-loose font-light">
              <p>
                We began this journey because we felt something was missing in modern travel: the soul. As a boutique agency, we aren't driven by volume or factory-line itineraries. Instead, we bring a profound, personal obsession to every single journey we design.
              </p>
              <p>
                We understand that trusting a new partner with your precious time is a leap of faith. That is precisely why our approach is radically transparent and profoundly personal. From the moment we first speak until you return home, you have our undivided attention.
              </p>
              <div className="pt-6 border-t border-primary-200">
                <p className="font-serif text-2xl italic text-primary-900 leading-relaxed">
                  "True luxury isn't about the price tag; it is about feeling completely understood and immaculately cared for."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
