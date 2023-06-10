/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0080D7",
        secondary: "#115C8F",
        accent: "#FDA95B",
        neutral: "#fff",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      textColor: {
        primary: "#0080D7",
        secondary: "#115C8F",
        accent: "#FDA95B",
        neutral: "#fff",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      borderColor: {
        primary: "#0080D7",
        secondary: "#115C8F",
        accent: "#FDA95B",
        neutral: "#fff",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },
  plugins: [],
};
