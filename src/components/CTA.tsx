import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative bg-gradient-to-br from-[#A46CF5] via-[#B984F8] to-[#CEA2FD]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 gradient-text leading-tight">
            Made in Dwarka.
            <br />
            Moving the Nation.
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-12 font-bold text-visible">
            Your story flows through lavender light.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-charcoal rounded-full font-extrabold text-lg hover:bg-white/95 transition-all flex items-center gap-2 group shadow-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] btn-pulse"
            >
              Join the Club
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass rounded-full font-bold text-lg text-white glow-hover border-2 border-white/40"
            >
              Discover Events
            </motion.button>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-white text-sm font-bold tracking-wide"
          >
            Born in Dwarka. Moving the Nation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
