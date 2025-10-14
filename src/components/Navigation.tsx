import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Feed", path: "/feed" },
    { name: "Profile", path: "/profile" },
    { name: "Community", path: "/community" },
  ];
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
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
            
            <button className="px-6 py-2 bg-white text-charcoal rounded-full font-bold hover:bg-white/95 transition-all hover:scale-110 shadow-lg hover:shadow-[0_4px_25px_rgba(0,0,0,0.25)] btn-pulse">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
