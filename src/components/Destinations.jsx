import { motion } from 'framer-motion';

const destinations = [
  {
    title: 'European Elegance',
    description: 'A curated journey through the continent\'s most exclusive enclaves.',
    image: '/images/international_tour.png',
  },
  {
    title: 'The Hidden Maldives',
    description: 'Private atolls and absolute seclusion.',
    image: '/images/honeymoon_package.png',
  },
  {
    title: 'Alpine Ascents',
    description: 'Luxury basecamps and tailored alpine adventures.',
    image: '/images/adventure_trip.png',
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-32 bg-primary-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-gold-500 text-xs font-light tracking-[0.2em] uppercase mb-6 block">Our Collection</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-900 tracking-tight">
            Curated <span className="italic text-primary-600">Journeys</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-4 border border-white/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700" />
              </div>

              <div className="text-center px-4">
                <h3 className="text-2xl font-serif text-primary-900 mb-2">{dest.title}</h3>
                <p className="text-primary-600 font-light text-sm tracking-wide">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <a href="#contact" className="inline-block border-b border-gold-500 text-primary-900 uppercase tracking-widest text-xs pb-2 hover:text-gold-600 hover:border-gold-600 transition-colors">
              Request the Full Lookbook
            </a>
        </div>
      </div>
    </section>
  );
}
