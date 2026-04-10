import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling 500px down, hide near the bottom
    const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;
    if (latest > 500 && !isNearBottom) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
      transition={{ duration: 0.4 }}
      className={`fixed bottom-8 right-8 z-40 pointer-events-none`}
    >
       <a 
         href="#contact" 
         className={`pointer-events-auto flex items-center justify-center gap-3 px-6 py-4 bg-primary-900 text-gold-400 font-light uppercase tracking-widest text-xs border border-gold-400/30 hover:bg-gold-400 hover:text-primary-900 transition-all shadow-2xl group ${visible ? 'cursor-pointer' : 'cursor-default opacity-0'}`}
       >
         <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
         <span className="hidden sm:inline">Book Consultation</span>
       </a>
    </motion.div>
  );
}
