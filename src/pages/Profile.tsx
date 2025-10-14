import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Award, Zap } from "lucide-react";

const Profile = () => {
  const stats = [
    { icon: Zap, label: "Total Runs", value: "147" },
    { icon: MapPin, label: "Distance", value: "892 km" },
    { icon: Calendar, label: "Active Days", value: "203" },
    { icon: Award, label: "Achievements", value: "24" },
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-12 mb-8"
          >
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#C084FC] to-[#E879F9] flex items-center justify-center text-white text-4xl font-bold border-4 border-white/20 shadow-[0_0_50px_rgba(192,132,252,0.5)]">
                  AS
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C084FC] to-[#E879F9] blur-2xl opacity-50 -z-10" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-white mb-2">Aarav Sharma</h1>
                <p className="text-white/70 text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  Dwarka, Delhi
                </p>
                <p className="text-white/60 font-light max-w-xl">
                  Running through life one step at a time. Finding flow in every stride. 
                  Kynetiq community member since Day 1. 💜
                </p>
              </div>
              
              <button className="px-6 py-3 bg-white text-[#7E22CE] rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105">
                Edit Profile
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#C084FC]/20 to-[#E879F9]/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#C084FC]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {[
                { date: "Today", activity: "Morning Run", distance: "8.2 km", time: "42:15" },
                { date: "Yesterday", activity: "Evening Trail", distance: "12.5 km", time: "1:05:30" },
                { date: "2 days ago", activity: "Recovery Run", distance: "5.0 km", time: "28:45" },
              ].map((run, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div>
                    <div className="text-white font-medium mb-1">{run.activity}</div>
                    <div className="text-white/50 text-sm">{run.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{run.distance}</div>
                    <div className="text-white/50 text-sm">{run.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
