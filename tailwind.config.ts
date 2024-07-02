import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'yellow': '#FFBB22',
      'blue': '#49A4F5',
      'white': '#FFFFFF',
      'black': '#000000'
    
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero-pattern': "url('/bg-people.png')",
          'social-container': "url('/social.png')",
          'bg-sky': "url('/sky.png')"
      },
    },
  },
  plugins: [],
};
export default config;
