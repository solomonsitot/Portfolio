module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideIn: 'slideIn 0.5s forwards ease-out',
        wave: "wave 1.5s infinite",
        slideInUp: "slideInUp 1s ease-out forwards",
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(0)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-10px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(10px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }, // Moves up slightly
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
