import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white">
      {/* Ambient background glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.3),transparent_70%)]"></div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-3xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] bg-clip-text text-transparent"
        >
          Ready to move with the community?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg mb-12 leading-relaxed"
        >
          Join runners across Dwarka every weekend — the Motion never stops.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA → Join form */}
          <Link
            to="/join"
            className="px-10 py-4 rounded-2xl font-semibold shadow-lg shadow-[#C084FC]/40 transition-transform duration-300 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] hover:scale-105"
          >
            Sign up for Kynetiq
          </Link>

          {/* Secondary CTA → Upcoming runs */}
          <Link
            to="/upcoming-runs"
            className="px-10 py-4 rounded-2xl font-semibold border border-white/20 text-white/90 hover:text-white transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-md"
          >
            View Upcoming Runs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
