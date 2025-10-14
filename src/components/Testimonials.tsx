import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kynetiq made running feel poetic. Every session is a story.",
      author: "Aarav Sharma",
      location: "Dwarka",
      avatar: "AS",
    },
    {
      quote: "I found my tribe here. We don't just run — we flow together.",
      author: "Meera Patel",
      location: "Gurgaon",
      avatar: "MP",
    },
    {
      quote: "The community, the energy, the design — everything is next level.",
      author: "Rohan Verma",
      location: "South Delhi",
      avatar: "RV",
    },
  ];
  
  return (
    <section className="py-24 relative bg-gradient-to-br from-[#B984F8] via-[#A46CF5] to-[#8B5CF6]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 gradient-text"
        >
          Stories in Motion.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass p-8 rounded-3xl relative border-2 border-white/20 glow-hover"
            >
              <Quote className="w-10 h-10 text-[#FF8C5C] mb-4 opacity-80 icon-hover drop-shadow-lg" />
              <p className="text-white text-lg mb-6 italic leading-relaxed font-medium text-visible">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C084FC] to-[#E879F9] flex items-center justify-center border-2 border-white shadow-[0_0_20px_rgba(192,132,252,0.5)]">
                  <span className="text-white font-extrabold text-lg drop-shadow-md">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-visible">{testimonial.author}</p>
                  <p className="text-white/90 text-sm font-semibold">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
