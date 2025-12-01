// src/pages/RegisterRun.tsx

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, User, Mail, Phone, MessageCircle, Calendar, MapPin, Clock, Ruler } from "lucide-react";

const RegisterRun = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // YOUR LIVE GOOGLE SCRIPT BACKEND
  const backendURL =
    "https://script.google.com/macros/s/AKfycbypUDvF_dZA8Dj2Nh2bsfcVCI8-ehT36zDAN3uc3Mu-mtgNZpsegdNZY3lV8jqChvwm/exec";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      type: "run-registration",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      heardFrom: formData.get("heardFrom"),
      excitedAbout: formData.get("excitedAbout")
    };

    try {
      await fetch(backendURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting your form.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white flex flex-col">
      <Navigation />

      {/* Background FX */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.75, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-40 -left-24 w-[420px] h-[420px] rounded-full bg-[#C084FC]/40 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
          className="absolute bottom-[-200px] right-[-140px] w-[520px] h-[520px] rounded-full bg-[#E879F9]/40 blur-[150px]"
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full bg-white/70"
            style={{
              top: `${12 + (i % 4) * 18}%`,
              left: `${15 + (i % 5) * 14}%`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.2, 0.9, 0.4], y: [0, -10, 0] }}
            transition={{
              duration: 4.5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="relative flex-1">
        <div className="container mx-auto px-6 max-w-4xl pt-32 pb-24 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs tracking-[0.25em] uppercase text-white/70 mb-4">
              Kynetiq Trial Run 1.0
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text mb-3">
              Register for this Run
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-stretch">

            {/* LEFT COLUMN - RUN INFO */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-3xl border border-white/15 bg-white/7 backdrop-blur-2xl p-6 md:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_60%)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold">Kynetiq Trial Run 1.0</h2>
                  <div className="rounded-full px-3 py-1 text-[11px] font-semibold bg-gradient-to-r from-[#C084FC] to-[#E879F9] shadow-lg shadow-[#C084FC]/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    First Ever Run
                  </div>
                </div>

                <div className="space-y-3 text-sm md:text-[15px] text-white/85 mb-6">
                  <p className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#E879F9]" />
                    <span><span className="font-semibold">Date:</span> 28th December (Sunday)</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C084FC]" />
                    <span><span className="font-semibold">Time:</span> 4:00 PM IST</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#FF8C5C]" />
                    <span><span className="font-semibold">Location:</span> Dwarka Sector 11 — DDA Park</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Ruler className="w-5 h-5 text-[#E879F9]" />
                    <span><span className="font-semibold">Distance:</span> 2KM loop</span>
                  </p>
                </div>

                <p className="text-xs md:text-sm text-white/80 mb-4">
                  Everything is organised by <span className="font-semibold text-white">Kynetiq</span>.
                </p>

                <div className="mt-3 border-t border-white/12 pt-4 text-xs md:text-sm text-white/80 space-y-1">
                  <p><span className="font-semibold text-white/85">*</span> Contacts:</p>
                  <p className="font-medium text-white/90">Founder – Advit Dixit</p>
                  <p>Phone: <a href="tel:+919625325576" className="underline">96253 25576</a></p>
                  <p>Instagram: <a href="https://instagram.com/advit_dxt" target="_blank" className="underline">@advit_dxt</a></p>
                  <p>Email: <a href="mailto:advitdixit07@gmail.com" className="underline">advitdixit07@gmail.com</a></p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-3xl border border-white/15 bg-white/8 backdrop-blur-2xl p-6 md:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.65)] overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,140,92,0.18),transparent_55%)]" />

              <motion.div
                className="pointer-events-none absolute -right-10 -top-10 w-32 h-32 rounded-full border border-white/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10 space-y-5">

                {/* Full Name */}
                <motion.div whileHover={{ scale: 1.01, y: -1 }} className="space-y-1">
                  <label className="text-xs font-medium text-white/75 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5 text-sm outline-none"
                  />
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ scale: 1.01, y: -1 }} className="space-y-1">
                  <label className="text-xs font-medium text-white/75 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> Email (for updates)
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5 text-sm outline-none"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div whileHover={{ scale: 1.01, y: -1 }} className="space-y-1">
                  <label className="text-xs font-medium text-white/75 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5 text-sm outline-none"
                  />
                </motion.div>

                {/* Heard From */}
                <motion.div whileHover={{ scale: 1.01, y: -1 }} className="space-y-1">
                  <label className="text-xs font-medium text-white/75">
                    How did you hear about this run?
                  </label>
                  <input
                    type="text"
                    name="heardFrom"
                    placeholder="Friend, Instagram, school, etc."
                    className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5 text-xs outline-none"
                  />
                </motion.div>

                {/* Excited About */}
                <motion.div whileHover={{ scale: 1.01, y: -1 }} className="space-y-1">
                  <label className="text-xs font-medium text-white/75 flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5" /> What are you most excited about?
                  </label>
                  <textarea
                    name="excitedAbout"
                    rows={3}
                    className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5 text-xs outline-none resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.96 }}
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      Saving your spot...
                    </>
                  ) : submitted ? (
                    <>You’re in for this run</>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      Confirm my spot
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterRun;
