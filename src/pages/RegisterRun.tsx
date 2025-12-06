// src/pages/RegisterRun.tsx

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  User,
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  Ruler,
} from "lucide-react";

const RegisterRun = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessAnim, setShowSuccessAnim] = useState(false);

  // GOOGLE SCRIPT BACKEND
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
      excitedAbout: formData.get("excitedAbout"),
    };

    try {
      await fetch(backendURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      // Trigger celebration animation
      setShowSuccessAnim(true);

      // After animation ends → show success UI
      setTimeout(() => {
        setShowSuccessAnim(false);
        setSubmitted(true);
      }, 2600);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting your form.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white flex flex-col">
      <Navigation />

      {/* SUCCESS CELEBRATION ANIMATION OVERLAY */}
      <AnimatePresence>
        {showSuccessAnim && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0D0C1D]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Expanding Neon Blast */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0.6 }}
              animate={{ scale: 12, opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] blur-3xl"
            />

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text drop-shadow-2xl mb-4">
                You’re In The Motion
              </h1>

              <p className="text-lg md:text-2xl text-white/80">
                Your spot is officially locked!
              </p>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0.2, 1, 0],
                  y: [-20, 20, -20],
                }}
                transition={{
                  duration: 2 + Math.random() * 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background FX */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.75, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-40 -left-24 w-[420px] h-[420px] rounded-full bg-[#C084FC]/40 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute bottom-[-200px] right-[-140px] w-[520px] h-[520px] rounded-full bg-[#E879F9]/40 blur-[150px]"
        />
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
            <p className="inline-flex px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-[0.25em] uppercase text-white/70 mb-4">
              Kynetiq Trial Run 1.0
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text">
              Register for this Run
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10">
            {/* LEFT INFO CARD — unchanged */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-white/15 bg-white/7 backdrop-blur-2xl p-7 shadow-[0_20px_70px_rgba(0,0,0,0.6)]"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    Kynetiq Trial Run 1.0
                  </h2>
                  <div className="rounded-full px-3 py-1 text-[11px] font-semibold bg-gradient-to-r from-[#C084FC] to-[#E879F9] shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    First Ever Run
                  </div>
                </div>

                <div className="space-y-3 text-white/85 mb-6 text-sm md:text-[15px]">
                  <p className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#E879F9]" />
                    <span>28th December (Sunday)</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C084FC]" />
                    <span>4:00 PM IST</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#FF8C5C]" />
                    <span>Dwarka Sector 11 — DDA Park</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Ruler className="w-5 h-5 text-[#E879F9]" />
                    <span>2KM friendly loop</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM CARD — unchanged UI */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-white/15 bg-white/8 backdrop-blur-2xl p-7 shadow-[0_20px_70px_rgba(0,0,0,0.65)]"
            >
              <div className="relative z-10 space-y-5">
                {!submitted ? (
                  <>
                    {/* NAME */}
                    <div>
                      <label className="text-xs flex items-center gap-2 text-white/75">
                        <User className="w-3.5 h-3.5" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="text-xs flex items-center gap-2 text-white/75">
                        <Mail className="w-3.5 h-3.5" /> Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="text-xs flex items-center gap-2 text-white/75">
                        <Phone className="w-3.5 h-3.5" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5"
                      />
                    </div>

                    {/* HEARD FROM */}
                    <div>
                      <label className="text-xs text-white/75">
                        How did you hear about this run?
                      </label>
                      <input
                        type="text"
                        name="heardFrom"
                        className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5 text-xs"
                      />
                    </div>

                    {/* EXCITED ABOUT */}
                    <div>
                      <label className="text-xs flex items-center gap-2 text-white/75">
                        <MessageCircle className="w-3.5 h-3.5" />
                        What are you most excited about?
                      </label>
                      <textarea
                        name="excitedAbout"
                        rows={3}
                        className="w-full rounded-xl bg-white/5 border border-white/20 px-3 py-2.5 text-xs resize-none"
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.96 }}
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                          Saving your spot...
                        </>
                      ) : (
                        <>
                          <ArrowRight className="w-4 h-4" />
                          Confirm my spot
                        </>
                      )}
                    </motion.button>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <h2 className="text-2xl font-bold">You’re in for this run!</h2>
                    <p className="text-white/80 mt-2">
                      We’ll send you updates before event day.
                    </p>
                  </div>
                )}
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
