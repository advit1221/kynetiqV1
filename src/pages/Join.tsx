import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Join = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    level: "Beginner",
    availability: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.location || !formData.consent) {
      alert("Please fill all required fields and agree to updates.");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white flex flex-col">
      <Navigation />

      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass max-w-2xl w-full p-10 rounded-3xl border border-white/10 backdrop-blur-lg shadow-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text">
              Join the Motion
            </h1>
            <p className="text-white/80 mb-8 text-lg">
              Be part of Dwarka’s fastest-growing running community. Let’s move together 🏃‍♂️
            </p>

            {/* --- Name --- */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C084FC]"
              />
            </div>

            {/* --- Email --- */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#E879F9]"
              />
            </div>

            {/* --- Phone --- */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Phone Number (Optional)</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF8C5C]"
              />
            </div>

            {/* --- Location --- */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Your Area / Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Dwarka Sector 11"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C084FC]"
              />
            </div>

            {/* --- Running Level --- */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Your Running Level *</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#E879F9] text-white"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* --- Availability --- */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Availability</label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="Weekends / Weekdays"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FF8C5C]"
              />
            </div>

            {/* --- Message --- */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Message / Motivation</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why do you want to join Kynetiq?"
                rows={3}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C084FC]"
              ></textarea>
            </div>

            {/* --- Consent Checkbox --- */}
            <div className="mb-8 flex items-center gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 rounded-md accent-[#C084FC]"
              />
              <label className="text-white/70">
                I agree to receive updates and emails about upcoming runs.
              </label>
            </div>

            {/* --- Submit Button --- */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] shadow-lg shadow-[#C084FC]/40 hover:shadow-[#E879F9]/50 transition-all"
            >
              Join the Motion
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg mx-auto p-10 rounded-3xl glass"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-[#C084FC]" />
            <h2 className="text-3xl font-bold mb-3">Welcome to Kynetiq!</h2>
            <p className="text-white/80">
              You’re officially part of the community. Keep an eye on your inbox for upcoming runs and events 🏃‍♀️✨
            </p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Join;
