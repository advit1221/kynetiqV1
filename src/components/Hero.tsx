import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full blur-[2px]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Blobs */}
      <div className="ambient-blob w-[400px] h-[400px] bg-[#E879F9]/40 top-10 left-10" />
      <div
        className="ambient-blob w-[320px] h-[320px] bg-[#8B5CF6]/50 bottom-10 right-20"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="ambient-blob w-[380px] h-[380px] bg-[#3DD5F3]/40 top-1/2 right-10"
        style={{ animationDelay: "10s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-[#FFD580] icon-hover" />
          <span className="text-white text-sm uppercase tracking-wider font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Born in Dwarka. Moving the Nation.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-7xl md:text-8xl font-extrabold mb-4 leading-tight"
        >
          <span className="block gradient-text drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Find Your Flow.
          </span>
          <motion.span
            className="block text-white font-black text-outline glow-hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Redefine Motion.
          </motion.span>
          <motion.span
            className="block gradient-text mt-2 text-[2rem] md:text-[2.5rem] font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Stories in Motion.
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
        >
          Run, connect, and move with your story — powered by community, crafted
          in Dwarka, and designed for every mover.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <button className="px-8 py-4 rounded-full font-extrabold text-lg bg-white text-[#6A21D9] shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:shadow-[0_0_50px_rgba(206,162,253,0.9)] hover:scale-110 transition-transform duration-300">
            Find Runs Near You
          </button>
          <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/60 backdrop-blur-md hover:bg-white/10 hover:scale-110 glow-hover transition-all duration-300">
            Join the Movement
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
