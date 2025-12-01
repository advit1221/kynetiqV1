// src/pages/Join.tsx

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

  const backendURL =
    "https://script.google.com/macros/s/AKfycbypUDvF_dZA8Dj2Nh2bsfcVCI8-ehT36zDAN3uc3Mu-mtgNZpsegdNZY3lV8jqChvwm/exec";

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.location || !formData.consent) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      await fetch(backendURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          type: "join",
          ...formData,
        }),
      });

      setSubmitted(true);
    } catch {
      alert("Error submitting form.");
    }
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
            {/* Header unchanged */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text">
              Join the Motion
            </h1>

            <p className="text-white/80 mb-8 text-lg">
              Be part of Dwarka’s fastest-growing running community. Let’s move together 🏃‍♂️
            </p>

            {/* All inputs identical UI */}
            <div className="mb-5">
              <label className="block text-white/70 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white/70 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white/70 mb-2">Phone Number (Optional)</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white/70 mb-2">Your Area / Location *</label>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white/70 mb-2">Your Running Level *</label>
              <select
                name="level"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-white/70 mb-2">Availability</label>
              <input
                type="text"
                name="availability"
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white/70 mb-2">Message / Motivation</label>
              <textarea
                name="message"
                rows={3}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
              />
            </div>

            <div className="mb-8 flex items-center gap-3">
              <input
                type="checkbox"
                name="consent"
                onChange={handleChange}
                className="w-5 h-5 rounded-md accent-[#C084FC]"
              />
              <label className="text-white/70">
                I agree to receive updates and emails about upcoming runs.
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C]"
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
              You’re officially part of the community. Keep an eye on your inbox.
            </p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Join;
