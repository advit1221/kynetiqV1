// src/pages/UpcomingRuns.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Ruler, Star, Sparkles, ArrowRight } from "lucide-react";

const UpcomingRuns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white flex flex-col">
      <Navigation />

      {/* Background FX */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Large soft glows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.65, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#C084FC]/35 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] rounded-full bg-[#E879F9]/35 blur-[140px]"
        />

        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full bg-white/60"
            style={{
              top: `${15 + i * 12}%`,
              left: `${20 + (i % 3) * 18}%`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.2, 0.8, 0.4], y: [0, -8, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="relative flex-1">
        <div className="container mx-auto px-6 max-w-4xl pt-32 pb-24 relative z-10">
          {/* Page Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/8 border border-white/15 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#E879F9]" />
            <span className="text-xs tracking-[0.2em] uppercase text-white/70">
              Upcoming Community Run
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] text-transparent bg-clip-text mb-4"
          >
            Get Notified About All Kynetiq Runs
          </motion.h1>

          {/* Short line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-white/80 text-base md:text-lg mb-10 max-w-2xl"
          >
            Here’s the first ever Kynetiq community run. Tap in, show up, and feel the Motion for real.
          </motion.p>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            whileHover={{ y: -4 }}
            className="relative rounded-3xl border border-white/12 bg-white/7 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* subtle radial glow behind content */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),transparent_60%)]" />

            <div className="relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-10 p-8 md:p-10">
              {/* Left column – core details */}
              <div>
                {/* Run name + badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Kynetiq Trial Run 1.0
                  </h2>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 }}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#C084FC] to-[#E879F9] shadow-lg shadow-[#C084FC]/40"
                  >
                    <Star className="w-3.5 h-3.5" />
                    First Ever Run
                  </motion.div>
                </div>

                {/* Tags row */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.06 },
                    },
                  }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {["Free to Join", "All Levels Welcome", "Community First", "Beginner Friendly"].map(
                    (tag) => (
                      <motion.span
                        key={tag}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="text-xs md:text-[13px] px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 backdrop-blur-md"
                      >
                        {tag}
                      </motion.span>
                    )
                  )}
                </motion.div>

                {/* Details list */}
                <div className="space-y-3 text-sm md:text-base text-white/85 mb-8">
                  <p className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#E879F9]" />
                    <span>
                      <span className="font-semibold">Date:</span> 28th December (Sunday)
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C084FC]" />
                    <span>
                      <span className="font-semibold">Time:</span> 4:00 PM IST (afternoon)
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#FF8C5C]" />
                    <span>
                      <span className="font-semibold">Location:</span> Dwarka Sector 11 — DDA Park
                      (Main Gate)
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Ruler className="w-5 h-5 text-[#E879F9]" />
                    <span>
                      <span className="font-semibold">Distance:</span> 2KM — friendly pace loop
                    </span>
                  </p>
                </div>

                {/* Journey strip */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-[11px] md:text-xs text-white/60 mb-1.5">
                    <span>Sign up</span>
                    <span>Show up</span>
                    <span>Run</span>
                    <span>Vibe</span>
                  </div>
                  <div className="relative h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C]"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-white/80 mb-6">
                  A no-pressure, high-energy community run designed for first-timers and regular
                  runners alike. Come as you are — we’ll run together, keep it fun, and close it out
                  with a cool-down and conversations.
                </p>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Link
                    to="/register-run"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm md:text-base font-semibold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] shadow-lg shadow-[#C084FC]/40 hover:scale-[1.03] active:scale-95 transition-transform"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Register for this Run
                  </Link>

                  <span className="text-xs md:text-[13px] text-white/60">
                    Limited spots. We keep it small so the community stays real.
                  </span>
                </div>
              </div>

              {/* Right column – Note & contact */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="relative"
              >
                <div className="absolute -top-6 -right-4 w-28 h-28 rounded-full bg-gradient-to-tr from-[#FF8C5C]/60 via-[#E879F9]/50 to-transparent blur-3xl opacity-70" />

                <div className="h-full rounded-2xl border border-white/15 bg-white/6 backdrop-blur-xl p-5 md:p-6 flex flex-col justify-between shadow-inner shadow-black/40">
                  <div>
                    <h3 className="text-sm font-semibold text-white/90 mb-1">
                      Good to know before you show up
                    </h3>
                    <p className="text-xs md:text-sm text-white/75 mb-4">
                      No fancy gear needed. Just your shoes, a bottle of water, and a mindset ready
                      to move. We’ll have the route planned, pace grouped, and vibes sorted.
                    </p>

                    <p className="text-xs md:text-sm text-white/80 mb-4">
                      Everything is organised by{" "}
                      <span className="font-semibold text-white">Kynetiq</span> at{" "}
                      <span className="font-semibold text-white">absolutely no cost</span>. Just
                      turn up — we’ll take care of the rest.
                    </p>
                  </div>

                  <div className="mt-3 border-t border-white/12 pt-4">
                    <p className="text-[11px] md:text-xs text-white/60 mb-1">
                      <span className="font-semibold text-white/80">*</span> For any enquiry,
                      reach out directly:
                    </p>
                    <p className="text-xs md:text-sm text-white/85 font-medium">
                      Founder – Advit Dixit & Mayank K  Srivastava 
                    </p>
                    <p className="text-xs md:text-sm text-white/80">
                      Phone:{" "}
                      <a href="tel:+919625325576" className="underline underline-offset-2">
                        96253 25576
                      </a>
                    </p>
                    <p className="text-xs md:text-sm text-white/80">
                      Instagram:{" "}
                      <a
                        href="https://www.instagram.com/kynetiq.runclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2"
                      >
                        @kynetiq.runclub 
                      </a>
                    </p>
                    <p className="text-xs md:text-sm text-white/80">
                      Email:{" "}
                      <a
                        href="mailto:kynetiqrunclub@gmail.com"
                        className="underline underline-offset-2"
                      >
                        kynetiqrunclub@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UpcomingRuns;
