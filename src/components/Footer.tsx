import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-[#8B5CF6] to-[#A46CF5] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-sm font-semibold">
            © 2024 Kynetiq Run Club. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white link-animate text-sm font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-white link-animate text-sm font-medium">
              Terms of Service
            </a>
            <a href="#" className="text-white link-animate text-sm font-medium">
              Contact
            </a>
          </div>
          
          <p className="text-white text-sm flex items-center gap-2 font-semibold">
            Made with <Heart className="w-4 h-4 text-[#FF8C5C] fill-current icon-hover drop-shadow-lg" /> in Dwarka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
