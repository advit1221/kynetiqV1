// src/pages/Founder.tsx
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sectionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Founder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0C1D] via-[#1B183A] to-[#2A2347] text-white flex flex-col">
      <Navigation />

      {/* Background FX */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#C084FC]/35 blur-[120px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] rounded-full bg-[#E879F9]/35 blur-[140px]"
        />

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/60"
            style={{
              top: `${10 + i * 7}%`,
              left: `${15 + (i % 5) * 12}%`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.1, 0.7, 0.3], y: [0, -10, 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="relative flex-1">
        <div className="container mx-auto px-6 max-w-5xl pt-32 pb-24 relative z-10">
          {/* Eyebrow label */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] tracking-[0.24em] uppercase text-white/70 mb-5 backdrop-blur-md"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E879F9]" />
            About the person behind Kynetiq
          </motion.div>

          {/* Hero Card */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 backdrop-blur-2xl p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] mb-14"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_55%)]" />

            <div className="relative z-10 grid gap-8 md:grid-cols-[1.6fr_1fr] items-center">
              <div>
                <p className="text-sm font-medium text-white/70 mb-3">
                  Building Kynetiq from (Delhi) Dwarka, for (Delhi) Dwarka.
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] bg-clip-text text-transparent leading-tight">
                  Hey, I’m Advit — a 15-year-old obsessed with motion.
                </h1>

                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                  I started Kynetiq because I wanted running in (Delhi) Dwarka to feel less like a solo
                  grind and more like a shared ritual. No complicated training plans, no pressure —
                  just a crew that shows up, runs together, and leaves with better energy than they
                  came with.
                </p>
              </div>

              {/* Right Card */}
              <div className="relative">
                <motion.div
                  initial={{ rotate: -4, y: 12, opacity: 0 }}
                  animate={{ rotate: -2, y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                  className="relative rounded-2xl border border-white/20 bg-[#0D0C1D]/70 px-5 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.75)]"
                >
                  <div className="mb-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-1">
                      Founder
                    </p>
                    <p className="text-lg font-semibold text-white">Advit Dixit</p>
                    <p className="text-xs text-white/60">
                      Student · Builder · Community Runner
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-white/75">
                    <p>Based in (Delhi) Dwarka · Running & product brain.</p>
                    <p>Kynetiq is my favourite project in motion right now.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 -bottom-6 h-24 w-24 rounded-full bg-gradient-to-tr from-[#FF8C5C]/60 via-[#E879F9]/40 to-transparent blur-3xl opacity-80"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Why Kynetiq */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            className="mb-10"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">Why I started Kynetiq.</h2>
            <p className="text-sm md:text-base text-white/85 mb-1.5">
              I couldn’t find a local running space that felt welcoming, consistent, and fun —
              so I decided to build it.
            </p>
            <p className="text-sm md:text-base text-white/70">
              Kynetiq is my way of turning “let’s go for a run sometime” into “see you on Sunday.”
            </p>
          </motion.section>

          {/* What Kynetiq means */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.15}
            className="mb-10"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">What Kynetiq means to me.</h2>
            <p className="text-sm md:text-base text-white/85 mb-1.5">
              For me, Kynetiq isn’t just a run club — it’s a community experiment.
            </p>
            <p className="text-sm md:text-base text-white/70">
              It’s that moment when you’re tired at 1.5KM, look around, and realise you’re not alone.
            </p>
          </motion.section>

          {/* What happens at runs */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
            className="mb-10"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              What actually happens at our runs.
            </h2>
            <p className="text-sm md:text-base text-white/85 mb-1.5">
              We pick a route, meet up, run as a group, regroup at the end, and cool down.
            </p>
            <p className="text-sm md:text-base text-white/70">
              No elites, no ego — just people enjoying the run.
            </p>
          </motion.section>

          {/* Expectations */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.25}
            className="mb-10"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">What you can expect from me.</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-semibold mb-1.5">Consistency</p>
                <p className="text-xs md:text-sm text-white/75">
                  I’ll keep runs organised, on time, and clearly communicated.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-semibold mb-1.5">Safety & pacing</p>
                <p className="text-xs md:text-sm text-white/75">
                  Friendly distances, safe routes, nobody left behind.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm font-semibold mb-1.5">Community-first</p>
                <p className="text-xs md:text-sm text-white/75">
                  I care more about how you feel than what your watch says.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Beyond KM */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.3}
            className="mb-10"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">Beyond the kilometres.</h2>
            <p className="text-sm md:text-base text-white/85 mb-1.5">
              Outside Kynetiq, I’m a student, a builder, and someone who loves creating.
            </p>
            <p className="text-sm md:text-base text-white/70">
              If I’m not sketching routes, I’m tweaking this website or replying to DMs.
            </p>
          </motion.section>

          {/* Reach out */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.35}
            className="mb-12"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">Reach out anytime.</h2>
            <p className="text-sm md:text-base text-white/80 mb-4">
              Curious? Nervous? Need a push to show up? Text me.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/6 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60 mb-2">
                  Founder
                </p>
                <p className="text-sm md:text-base font-semibold text-white">Advit Dixit</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/6 p-4 backdrop-blur-xl text-sm text-white/85 space-y-1.5">
                <p>
                  Phone:{" "}
                  <a href="tel:+919625325576" className="underline underline-offset-2">
                    96253 25576
                  </a>
                </p>

                <p>
                  Instagram:{" "}
                  <a
                    href="https://instagram.com/advit_dxt"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    @advit_dxt
                  </a>
                </p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:advitdixit07@gmail.com"
                    className="underline underline-offset-2"
                  >
                    advitdixit07@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.4}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 px-6 py-6 md:px-8 md:py-7 backdrop-blur-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm md:text-base font-semibold mb-1">
                  Ready to see what Kynetiq feels like in real life?
                </p>

                <p className="text-xs md:text-sm text-white/75">
                  Join the Motion or check upcoming runs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/join"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] shadow-lg shadow-[#C084FC]/40 hover:scale-[1.03] active:scale-95 transition-transform"
                >
                  Join the Motion
                </a>

                <a
                  href="/upcoming-runs"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold border border-white/25 text-white/90 hover:bg-white/10 transition-colors"
                >
                  Check upcoming runs
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Founder;
