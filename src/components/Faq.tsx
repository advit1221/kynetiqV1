import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Kynetiq?",
    simple: "Kynetiq is Dwarka’s coolest run club.",
    vibe: "It’s a community of runners who move together every weekend — sharing energy, pace, and good vibes.",
  },
  {
    question: "When do runs happen?",
    simple: "We run every weekend — usually early mornings.",
    vibe: "Keep an eye on our upcoming events page for the next run — all are welcome to join!",
  },
  {
    question: "What happens at these runs?",
    simple: "A bunch of runners gather and hit a pre-planned route together.",
    vibe: "No fancy gear or pressure — just your body, mind, and the energy of the crew pushing forward together.",
  },
  {
    question: "What to expect?",
    simple: "Pure motivation and collective motion.",
    vibe: "Expect people cheering you on, tracking goals, sharing stories, and enjoying the rhythm of running.",
  },
];

const Faq = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E879F9]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C084FC]/20 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text"
        >
          FAQs — All About Kynetiq
        </motion.h2>

        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-white/90 text-lg font-medium">{faq.simple}</p>
              <p className="text-white/70 mt-2">{faq.vibe}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/community"
            className="text-[#E879F9] hover:text-[#FF8C5C] font-semibold transition-all"
          >
            → Check upcoming community runs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
