import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        typingMobileOne: {
          "0%": {
            maxWidth: "0",
            borderColor: "var(--primary)",
          },
          "80%": {
            maxWidth: "6.8em",
            borderColor: "var(--primary)",
          },
          "100%": {
            maxWidth: "6.8em",
            borderColor: "transparent",
          },
        },
        typingMobileTwo: {
          "0%, 38%": {
            maxWidth: "0",
            visibility: "hidden",
            borderColor: "transparent",
          },
          "39%": {
            maxWidth: "0",
            visibility: "visible",
            borderColor: "var(--primary)",
          },
          "80%": {
            maxWidth: "5.8em",
            visibility: "visible",
            borderColor: "var(--primary)",
          },
          "100%": {
            maxWidth: "5.8em",
            visibility: "visible",
            borderColor: "transparent",
          },
        },
        typingMobileThree: {
          "0%, 66%": {
            maxWidth: "0",
            visibility: "hidden",
            borderColor: "transparent",
          },
          "67%": {
            maxWidth: "0",
            visibility: "visible",
            borderColor: "var(--primary)",
          },
          "100%": {
            maxWidth: "8.4em",
            visibility: "visible",
            borderColor: "var(--primary)",
          },
        },
        typingDesktopOne: {
          "0%": {
            maxWidth: "0",
            borderColor: "var(--primary)",
          },
          "85%": {
            maxWidth: "12.9em",
            borderColor: "var(--primary)",
          },
          "100%": {
            maxWidth: "12.9em",
            borderColor: "transparent",
          },
        },
        typingDesktopTwo: {
          "0%, 58%": {
            maxWidth: "0",
            visibility: "hidden",
            borderColor: "transparent",
          },
          "59%": {
            maxWidth: "0",
            visibility: "visible",
            borderColor: "var(--primary)",
          },
          "100%": {
            maxWidth: "8.35em",
            visibility: "visible",
            borderColor: "var(--primary)",
          },
        },
        blinkFinal: {
          "0%, 100%": {
            borderColor: "var(--primary)",
          },
          "50%": {
            borderColor: "transparent",
          },
        },
      },
      animation: {
        typingMobileOne:
          "typingMobileOne 1.35s steps(11, end) 0.35s both",
        typingMobileTwo:
          "typingMobileTwo 2.5s steps(10, end) 0.35s both",
        typingMobileThree:
          "typingMobileThree 3.8s steps(14, end) 0.35s both, blinkFinal 0.75s step-end 4.15s infinite",
        typingDesktopOne:
          "typingDesktopOne 2s steps(21, end) 0.35s both",
        typingDesktopTwo:
          "typingDesktopTwo 3.4s steps(14, end) 0.35s both, blinkFinal 0.75s step-end 3.75s infinite",
      },
    },
  },
} satisfies Config;

export default config;
