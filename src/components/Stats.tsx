import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Stats = () => {
  const faqs = [
    {
      q: "What is Kynetiq?",
      short: "Dwarka’s growing community of runners and movers.",
      detail:
        "Kynetiq is a Dwarka-based run club that brings together people who love to move, sweat, and connect. We organize community runs and social workouts that go beyond fitness — it’s about shared energy and belonging.",
    },
    {
      q: "When do the runs happen?",
      short: "We move together every weekend.",
      detail:
        "Community runs are hosted every weekend in and around Dwarka. Each week’s route and distance are shared in advance, so you can plan your weekend motion and join the crew.",
    },
    {
      q: "What happens at these runs?",
      short: "Simple — people, energy, and movement.",
      detail:
        "A bunch of runners gather, warm up, and take off together on a pre-assigned route — tracking progress, cheering each other, and sharing post-run vibes. It’s free, fun, and open to everyone.",
    },
    {
      q: "What should I expect?",
      short: "Just bring your energy.",
      detail:
        "No fancy gear or pace required — just show up with your mind and body ready to move. Whether you’re new or seasoned, you’ll find your rhythm here.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] bg-clip-text text-transparent"
        >
          Know the Motion
        </motion.h2>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#E879F9] to-[#C084FC] text-transparent bg-clip-text">
                {faq.q}
              </h3>
              <p className="text-white/90 mb-1">{faq.short}</p>
              <p className="text-white/70 text-base leading-relaxed">{faq.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
