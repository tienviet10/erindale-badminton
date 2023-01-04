/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "application-color": "var(--application-color)",
        "text-application-color": "var(--text-application-color)",
      },
    },
  },
  plugins: [],
};
