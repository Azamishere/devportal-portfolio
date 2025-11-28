import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Discord-inspired palette
        discord: {
          dark: '#36393f',
          darker: '#2f3136',
          darkest: '#202225',
          accent: '#5865f2',
          success: '#3ba55d',
          warning: '#faa61a',
          text: {
            primary: '#dcddde',
            secondary: '#72767d',
            muted: '#4f545c',
          },
        },
        light: {
          bg: '#ffffff',
          card: '#f9f9fb',
          header: '#f2f3f5',
          text: {
            primary: '#2e3338',
            secondary: '#4f5660',
          },
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['SFMono-Regular', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
