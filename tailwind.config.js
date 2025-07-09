export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.8rem",
        // sm: "1.5rem",
        // lg: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#E3F2FD",
        borderColor: "#DFDFE5",
        background: "#E5E5E5",
        hoverColor: "#6d28d9",
      },
      boxShadow: {
        "header-footer": "-2px 0 8px 2px rgba(0, 0, 0, 0.1)",
        "modal-btns":
          "0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
        "character-card":
          "0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
        "loadMore-btn":
          "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px 0 rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        karla: ["karla", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
