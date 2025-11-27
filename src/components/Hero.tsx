import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C084FC]/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E879F9]/30 rounded-full blur-[120px] animate-pulse" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Small Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-medium text-white/80 mb-3 tracking-wide"
        >
          “Where energy meets community.” —{" "}
          <span className="text-white/90 font-semibold">Join the Kynetiq Motion.</span>
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text drop-shadow-lg"
        >
          Dwarka’s Coolest Run Club
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed"
        >
          Join a growing community of runners every weekend in Dwarka.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/upcoming"
            className="flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] shadow-lg shadow-[#C084FC]/40 hover:scale-105 transition-transform"
          >
            <ArrowRight className="w-5 h-5" />
            Find Upcoming Runs Near You
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
