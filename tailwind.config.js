/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['JetBrains Mono', 'ui-sans-serif', 'system-ui'],
      'jet-brains': ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [],
}
