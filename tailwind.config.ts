import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // 🌑 Core palette inspired by your neon lightning logo
        background: "#030014", // deep space black
        foreground: "#f8f9fa",
        primary: {
          DEFAULT: "#00FFFF", // electric cyan blue
          foreground: "#0A0A0A",
        },
        secondary: {
          DEFAULT: "#FF00FF", // hot neon magenta
          foreground: "#0A0A0A",
        },
        accent: {
          DEFAULT: "linear-gradient(90deg, #00FFFF 0%, #FF00FF 100%)",
          foreground: "#FFFFFF",
        },
        border: "rgba(255,255,255,0.1)",
        input: "#1a1a1a",
        ring: "#00FFFF",
        card: {
          DEFAULT: "#0b001a",
          foreground: "#e0e0ff",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },

      // 🌟 Neon glow animations
      keyframes: {
        "neon-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #FF00FF, 0 0 40px #FF00FF",
          },
          "50%": {
            textShadow:
              "0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #00FFFF, 0 0 50px #00FFFF",
          },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 0, 255, 0.7)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        "neon-glow": "neon-glow 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },

      // 🌀 Gradients + glow utilities
      backgroundImage: {
        "kynetiq-gradient":
          "linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)",
      },
      boxShadow: {
        "neon-blue": "0 0 20px #00FFFF",
        "neon-pink": "0 0 20px #FF00FF",
        "neon-dual": "0 0 20px #00FFFF, 0 0 40px #FF00FF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
