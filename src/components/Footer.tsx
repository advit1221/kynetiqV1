import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-[#8B5CF6] to-[#A46CF5] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-sm font-semibold">
            © 2025 Kynetiq Run Club. All rights reserved.
          </p>
          
                   
          <p className="text-white text-sm flex items-center gap-2 font-semibold">
            Made with <Heart className="w-4 h-4 text-[#FF8C5C] fill-current icon-hover drop-shadow-lg" /> in India! - Delhi! - Dwarka!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
