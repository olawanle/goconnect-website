import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,css}"],
  safelist: [
    {
      pattern:
        /^(bg|text|border)-gc-(black|dark2?|dark3|green|green-hover|ink|text(-bright|-dim2?|-dimmer2?|-faintest?)?)(\/\d+)?$/,
    },
    "border-border",
    "bg-background",
    "text-foreground",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gc: {
          green: "rgb(82 255 38 / <alpha-value>)",
          "green-hover": "#8dff6e",
          ink: "#06070a",
          black: "#0a0b0c",
          dark: "#0c0e0f",
          dark2: "#101314",
          dark3: "#141718",
          text: "#e6e7e8",
          "text-bright": "#f2f3f4",
          "text-dim": "#9fa4a7",
          "text-dim2": "#82878a",
          "text-dimmer": "#6b6f72",
          "text-dimmer2": "#55595c",
          "text-faint": "#4b5053",
          "text-faintest": "#3f4446",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config
