import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className="py-40 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          {/* Image Container with Cinematic Reveal */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.1 }}
              className="relative overflow-hidden aspect-[4/5] max-h-[800px] bg-[#e2e8f0]"
            >
              {/* Mask overlay that slides off to the right */}
              <motion.div 
                initial={{ width: "100%" }}
                whileInView={{ width: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0 z-20 bg-zinc-50 origin-right"
              />
              
              {/* Image that slowly pans down while scaling back */}
              <motion.div 
                className="w-full h-full"
                style={{ y: yImage }}
              >
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                  src="images/domestic_tour.png"
                  alt="Beautiful Landscape"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[#020617]/10 mix-blend-multiply z-10" />
            </motion.div>

            {/* The Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-16 -right-[15%] bg-[#020617] text-white p-12 max-w-[340px] hidden sm:block shadow-2xl z-30"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase mb-6 font-light opacity-60">A Boutique Promise</div>
              <div className="font-serif text-3xl italic leading-snug">Trust is earned in the details we carefully perfect.</div>
            </motion.div>
          </div>

          <div className="lg:pl-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-8 block">Our Philosophy</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#020617] font-bold mb-12 leading-[1.05] tracking-tight">
              <span className="block overflow-hidden pb-2">
                <motion.span 
                  initial={{ y: "150%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Crafted for the
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span 
                  initial={{ y: "150%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block italic text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-400 font-bold"
                >
                  Discerning Traveler
                </motion.span>
              </span>
            </h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-10 text-[#475569] text-xl leading-relaxed font-light max-w-xl"
            >
              <p>
                We began this journey because we felt something was missing in modern travel: the soul. As a boutique agency, we aren't driven by volume or factory-line itineraries. Instead, we bring a profound, personal obsession to every single journey we design.
              </p>
              <p>
                We understand that trusting a new partner with your precious time is a leap of faith. That is precisely why our approach is radically transparent and profoundly personal. From the moment we first speak until you return home, you have our undivided attention.
              </p>
              <div className="pt-10 border-t border-[#e2e8f0]">
                <p className="font-serif text-[28px] italic text-[#020617] leading-snug">
                  "True luxury isn't about the price tag; it is about feeling completely understood and immaculately cared for."
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
