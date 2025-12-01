// src/components/Navigation.tsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Upcoming Runs", path: "/upcoming-runs" },
    { name: "About the Founder", path: "/founder" },
  ];

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 
                 bg-gradient-to-b from-black/60 via-black/30 to-transparent 
                 backdrop-blur-2xl"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* LOGO (new, replaces text “Kynetiq”) */}
          <Link to="/" className="relative flex items-center">
            <img
              src="/kynetiq-logo.png"
              alt="Kynetiq Logo"
              className="w-20 md:w-24 
                         drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]
                         hover:scale-105 transition-all duration-300"
            />
            <span className="absolute left-0 right-0 -bottom-1 h-px 
              bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
          </Link>

          <div className="flex items-center gap-6">

            {/* Nav Links */}
            <div className="hidden sm:flex items-center gap-6">
              {links.map((link) => (
                <motion.div key={link.path} className="relative">
                  <Link
                    to={link.path}
                    className="text-sm font-semibold tracking-wide uppercase 
                               text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>

                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] 
                                 bg-gradient-to-r from-[#C084FC] 
                                 via-[#E879F9] to-[#FF8C5C]"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Join Button */}
            <motion.div
              className="relative"
              animate={{ y: [0, -1.5, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 -m-1 rounded-full 
                           bg-gradient-to-r from-[#C084FC]/40 
                           via-[#E879F9]/30 to-[#FF8C5C]/40 
                           blur-lg opacity-70"
                animate={{ opacity: [0.4, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 rounded-full 
                             border border-white/30 
                             bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] 
                             px-6 py-2 text-sm font-semibold text-white 
                             shadow-[0_12px_35px_rgba(0,0,0,0.45)]"
                >
                  Join the Motion
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
