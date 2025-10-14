import { motion } from "framer-motion";
import { Activity, Users2, Trophy, Target, Heart, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "Track your rhythm.",
      description: "Every step, every pace, every moment — captured beautifully.",
    },
    {
      icon: Users2,
      title: "Connect with circles.",
      description: "Find your tribe. Run with people who share your energy.",
    },
    {
      icon: Trophy,
      title: "Earn your identity.",
      description: "Build your runner profile. Show your journey, not just your stats.",
    },
    {
      icon: Target,
      title: "Set meaningful goals.",
      description: "From first 5K to ultra marathons — growth at your pace.",
    },
    {
      icon: Heart,
      title: "Move with mindfulness.",
      description: "Running isn't just physical. It's mental, emotional, poetic.",
    },
    {
      icon: Calendar,
      title: "Join events that matter.",
      description: "From sunrise runs to night trails — experience motion together.",
    },
  ];
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-6 gradient-text"
        >
          Redefine Motion.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white text-center mb-16 max-w-2xl mx-auto font-bold text-visible"
        >
          More than a run club. A culture. A movement. A kinetic community.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="glass p-8 rounded-3xl glow-hover border-2 border-[#C084FC]/40"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#C084FC] to-[#E879F9] mb-6 icon-hover shadow-[0_0_30px_rgba(192,132,252,0.5)]">
                  <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 text-visible">{feature.title}</h3>
                <p className="text-white font-medium">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
