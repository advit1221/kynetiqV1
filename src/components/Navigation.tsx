import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Navigation = () => {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Community", path: "/community" },
  ];

  // --- Magnetic hover effect setup ---
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    animate(x, 0);
    animate(y, 0);
  };

  // --- Subtle pulsing glow animation loop ---
  useEffect(() => {
    const glow = buttonRef.current;
    if (!glow) return;
    glow.animate(
      [
        { boxShadow: "0 0 20px rgba(224,121,249,0.4)" },
        { boxShadow: "0 0 40px rgba(255,140,92,0.8)" },
        { boxShadow: "0 0 20px rgba(224,121,249,0.4)" },
      ],
      { duration: 4000, iterations: Infinity }
    );
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Kynetiq
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-white font-semibold link-animate"
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C084FC] to-white shadow-[0_0_10px_rgba(192,132,252,0.6)]"
                  />
                )}
              </Link>
            ))}

            {/* ✨ Kinetic Join Button */}
            <motion.button
              ref={buttonRef}
              style={{ x, y, rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden px-6 py-2 rounded-full font-bold text-lg 
                         bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C] 
                         text-white transition-all duration-300 shadow-lg"
            >
              <span className="relative z-10">Join the Motion</span>

              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />

              {/* Glow aura */}
              <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF8C5C]" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
