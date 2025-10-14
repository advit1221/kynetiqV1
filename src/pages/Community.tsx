import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, MapPin, Calendar } from "lucide-react";

const Community = () => {
  const circles = [
    {
      name: "Dwarka Sunrise Squad",
      members: 247,
      gradient: "from-[#C084FC] to-[#E879F9]",
      location: "Dwarka Sector 12",
      nextRun: "Tomorrow, 6:00 AM",
    },
    {
      name: "Gurgaon Trail Runners",
      members: 183,
      gradient: "from-[#E879F9] to-[#FF8C5C]",
      location: "Aravalli Biodiversity Park",
      nextRun: "Sunday, 7:00 AM",
    },
    {
      name: "South Delhi Speed Demons",
      members: 312,
      gradient: "from-[#7E22CE] to-[#C084FC]",
      location: "Nehru Park",
      nextRun: "Saturday, 5:30 AM",
    },
    {
      name: "Night Owls Running Crew",
      members: 156,
      gradient: "from-[#4C1D95] to-[#7E22CE]",
      location: "India Gate",
      nextRun: "Friday, 9:00 PM",
    },
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              Runner Circles.
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Find your tribe. Connect with runners who share your energy and rhythm.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {circles.map((circle, index) => (
              <motion.div
                key={circle.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="glass rounded-3xl p-8 glow-hover transition-smooth group relative overflow-hidden"
              >
                {/* Gradient Aura */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${circle.gradient} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
                />
                
                {/* Glow Ring */}
                <div 
                  className={`absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br ${circle.gradient} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{circle.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-white/70">
                      <Users className="w-4 h-4" />
                      <span>{circle.members} members</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <MapPin className="w-4 h-4" />
                      <span>{circle.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70">
                      <Calendar className="w-4 h-4" />
                      <span>Next run: {circle.nextRun}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 glass rounded-full text-white font-medium hover:bg-white/15 transition-all">
                    Join Circle
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Create Circle CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-white/70 mb-4">Don't see your area?</p>
            <button className="px-8 py-4 bg-white text-[#7E22CE] rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105">
              Create Your Circle
            </button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
