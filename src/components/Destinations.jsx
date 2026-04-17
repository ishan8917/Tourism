import { motion } from 'framer-motion';

const destinations = [
  {
    title: 'European Elegance',
    description: 'A curated journey through the continent\'s most exclusive enclaves.',
    image: 'images/international_tour.png',
  },
  {
    title: 'The Hidden Maldives',
    description: 'Private atolls and absolute seclusion.',
    image: 'images/honeymoon_package.png',
  },
  {
    title: 'Alpine Ascents',
    description: 'Luxury basecamps and tailored alpine adventures.',
    image: 'images/adventure_trip.png',
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-40 bg-[#020617] text-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-8 block drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]"
          >
            Our Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight font-bold"
          >
            Curated <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-200">Journeys</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 border border-white/5">
                <motion.img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-1000" />
                
                {/* Reveal border */}
                <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-[1s] ease-[0.16,1,0.3,1]" />

                <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-[1s] ease-[0.16,1,0.3,1]">
                  <h3 className="text-4xl lg:text-5xl font-serif text-white mb-3 font-bold">{dest.title}</h3>
                  <p className="text-white/80 font-medium text-base tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {dest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 text-center"
        >
          <a href="#contact" className="inline-block border-b border-white/20 text-white uppercase tracking-[0.2em] text-[10px] pb-3 hover:text-white hover:border-white transition-all duration-300">
            Request the Full Lookbook
          </a>
        </motion.div>
      </div>
    </section>
  );
}
