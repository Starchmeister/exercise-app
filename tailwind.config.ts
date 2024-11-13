import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toggle: {
          background: {
            neutral: {
              DEFAULT: "rgba(var(--toggle-background-neutral-default))",
              hovered: "rgba(var(--toggle-background-neutral-hovered))",
              pressed: "rgba(var(--toggle-background-neutral-pressed))",
              subtle: {
                DEFAULT:
                  "rgba(var(--toggle-background-neutral-subtle-default))",
                hovered:
                  "rgba(var(--toggle-background-neutral-subtle-hovered))",
                pressed:
                  "rgba(var(--toggle-background-neutral-subtle-pressed))",
              },
            },
            disabled: "rgba(var(--toggle-background-disabled))",
            selected: {
              bold: {
                DEFAULT: "rgba(var(--toggle-background-selected-bold-default))",
                hovered: "rgba(var(--toggle-background-selected-bold-hovered))",
                pressed: "rgba(var(--toggle-background-selected-bold-pressed))",
              },
            },
          },
          border: {
            DEFAULT: "rgba(var(--toggle-border-default))",
            disabled: "rgba(var(--toggle-border-disabled))",
            selected: "rgba(var(--toggle-border-selected))",
          },
          text: {
            DEFAULT: "rgba(var(--toggle-text-default))",
            disabled: "rgba(var(--toggle-text-disabled))",
            inverse: "rgba(var(--toggle-text-inverse))",
          },
        },
        background: {
          canvas: "rgba(var(--background-canvas))",
        },
      },
      borderRadius: {
        full: "var(--radius-full)",
        lg: "var(--radius-large)",
        md: "var(--radius-medium)",
        sm: "var(--radius-small)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
