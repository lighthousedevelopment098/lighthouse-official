/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:{
          50: "#FDECE6", // Lightest shade
          100: "#FAD2C4",
          200: "#F5A493",
          300: "#F07563",
          400: "#EB4732",
          500: "#903519", // Base shade (primary-500)
          600: "#722B14",
          700: "#561F10",
          800: "#3A140B",
          900: "#1D0A05",
        },
        // primary: "#903519", // Example: A dark blue shade
        secondary: "#10B981", // Example: A green shade
        accent: "#F59E0B", // Example: An orange shade
        customGray: "#E5E7EB", // Example: A light gray shade
      },
    },
  },
  plugins: [],
}
module.exports = {
  corePlugins: {
    preflight: true, // Disable Preflight CSS
  },
};


