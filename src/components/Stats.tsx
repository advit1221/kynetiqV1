import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Users, value: "2,500+", label: "Active Runners", color: "#FF6B35" },
    { icon: MapPin, value: "50+", label: "Run Routes", color: "#4FC3F7" },
    { icon: Calendar, value: "120+", label: "Monthly Events", color: "#6EE7B7" },
    { icon: Award, value: "10K+", label: "Kilometers Covered", color: "#E879F9" },
  ];
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 gradient-text"
        >
          The Momentum So Far.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-8 rounded-3xl text-center glow-hover border-2 border-white/20"
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#E879F9] to-[#C084FC] mb-6 icon-hover"
                  style={{ boxShadow: `0 0 30px ${stat.color}40` }}
                >
                  <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-2 text-visible">{stat.value}</h3>
                <p className="text-white text-sm uppercase tracking-wider font-semibold">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
