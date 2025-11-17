import { motion } from "framer-motion";
import { Sparkles, Users, MapPin, Zap } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-[#E879F9]" />,
    title: "Built on community",
    simple: "Kynetiq is more than just a run club.",
    vibe: "It’s a tribe where every step, laugh, and story adds to the motion.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-[#C084FC]" />,
    title: "Runs across Dwarka",
    simple: "We run every weekend with pre-planned routes.",
    vibe: "Show up, stretch out, and follow the motion — no gear, just good energy.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#FF8C5C]" />,
    title: "Why Kynetiq?",
    simple: "Because running feels better together.",
    vibe: "Push limits, meet runners, share vibes — Kynetiq keeps you moving.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#E879F9]" />,
    title: "What to expect",
    simple: "A bunch of runners, a route, and raw energy.",
    vibe: "No pressure, no rules — just motion, community, and shared purpose.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] bg-clip-text text-transparent"
        >
          Why and What Kynetiq
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-white/80 text-base mb-2">{feature.simple}</p>
              <p className="text-white/60 italic">{feature.vibe}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
