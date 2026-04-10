import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-gold-500 font-light tracking-[0.2em] text-xs uppercase mb-6 block">Inquire</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-8 leading-tight">
                Begin Your <br />
                <span className="italic text-primary-600">Journey</span>
              </h2>
              <p className="text-primary-600 font-light mb-12 leading-relaxed tracking-wide">
                We accept a limited number of new clients each season to maintain our uncompromising standards of service. Please share a few details about your upcoming travel aspirations.
              </p>
            </div>
            
            <div className="space-y-8 mt-auto hidden md:block">
              <div className="border-l border-gold-400 pl-6">
                <h4 className="text-sm font-light tracking-[0.1em] text-primary-500 uppercase mb-2">Direct Line</h4>
                <p className="text-primary-900 font-serif text-xl">+1 (800) LUX-TRVL</p>
              </div>
              <div className="border-l border-gold-400 pl-6">
                <h4 className="text-sm font-light tracking-[0.1em] text-primary-500 uppercase mb-2">Private Consultations</h4>
                <p className="text-primary-900 font-serif text-xl">concierge@wanderluxe.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-3 bg-white p-10 md:p-14 border border-primary-100 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-gold-400 m-4 opacity-50" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-gold-400 m-4 opacity-50" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b border-primary-200">
                  <input type="text" className="w-full py-3 bg-transparent focus:outline-none focus:border-gold-400 transition-colors font-light text-primary-900 placeholder:text-primary-400" placeholder="First Name" />
                </div>
                <div className="border-b border-primary-200">
                  <input type="text" className="w-full py-3 bg-transparent focus:outline-none focus:border-gold-400 transition-colors font-light text-primary-900 placeholder:text-primary-400" placeholder="Last Name" />
                </div>
              </div>
              
              <div className="border-b border-primary-200">
                <input type="email" className="w-full py-3 bg-transparent focus:outline-none focus:border-gold-400 transition-colors font-light text-primary-900 placeholder:text-primary-400" placeholder="Email Address" />
              </div>

              <div className="border-b border-primary-200">
                <select className="w-full py-3 bg-transparent focus:outline-none focus:border-gold-400 transition-colors font-light text-primary-900 appearance-none">
                  <option value="">Destination of Interest (Optional)</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="americas">Americas</option>
                  <option value="africa">Africa</option>
                  <option value="undecided">To be decided</option>
                </select>
              </div>

              <div className="border-b border-primary-200">
                <textarea rows="3" className="w-full py-3 bg-transparent focus:outline-none focus:border-gold-400 transition-colors font-light text-primary-900 placeholder:text-primary-400 resize-none" placeholder="Tell us about your expectations..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-primary-900 text-gold-400 font-light uppercase tracking-[0.2em] text-xs hover:bg-gold-400 hover:text-primary-900 transition-all border border-transparent hover:border-primary-900">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
