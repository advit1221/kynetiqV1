import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arnav Singh Negi",
    quote: "Running with Kynetiq made running more fun.",
    vibe: "Every weekend feels like a story in motion.",
  },
  {
    name: "Advit Dixit",
    quote: "It’s more than running — it’s community.",
    vibe: "We run, vibe, and grow together.",
  },
  {
    name: "Samyak Kumar",
    quote: "Everyone pushes each other — it’s genuine.",
    vibe: "No finish lines, just shared rhythm.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text"
        >
          Stories in Motion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/70 mb-16 text-lg"
        >
          Real people. Real runs. Real energy.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-3xl p-8 shadow-xl border border-white/10 backdrop-blur-xl hover:scale-[1.03] transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-3">{t.name}</h3>
              <p className="text-lg text-white/90 mb-3 italic">“{t.quote}”</p>
              <p className="text-sm text-white/60">{t.vibe}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
