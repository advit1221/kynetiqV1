import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Ruler } from "lucide-react";

const UpcomingRuns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white">
      <Navigation />

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-32 pb-12 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text"
      >
        Get Notified About All Kynetiq Runs
      </motion.h1>

      {/* Run Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-6 max-w-xl"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/10 transition-all">
          <h2 className="text-2xl font-bold mb-4">Kynetiq Sunday Motion Run</h2>

          <div className="space-y-3 text-white/80">
            <p className="flex items-center gap-3">
              <Calendar size={18} /> Sunday, Every Week
            </p>
            <p className="flex items-center gap-3">
              <Clock size={18} /> 6:45 AM Meetup
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={18} /> Dwarka Sector 10, Near District Park Gate
            </p>
            <p className="flex items-center gap-3">
              <Ruler size={18} /> 5K & 3K Loops Available
            </p>
          </div>

          <Link
            to="/join"
            className="block text-center mt-8 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-[#C084FC]/40 transition-transform bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] hover:scale-105"
          >
            Join this Run
          </Link>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default UpcomingRuns;
