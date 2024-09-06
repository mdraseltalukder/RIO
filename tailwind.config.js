/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      Grotesk: ["Space Grotesk", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      h1: ["40px;"],
      h2: ["35px;"],
      h3: ["25px;"],
      h4: ["20px;"],
      // span: ["40px;"],
      a: ["18px;"],
      p: ["16px;"],
    },
    colors: {
      pr: "#1a5eff",
      bg: "#e3e7ff",
      bg_btn: "rgb(65, 66, 68)",
      hover: "rgb(32, 43, 56)",
    },
    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    plugins: [],
  },
};
