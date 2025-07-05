/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sheep-white': '#f8f9fa',
        'wool-cream': '#f5f5dc',
        'border-brown': '#8b4513',
        'grass-green': '#228b22',
        'sky-blue': '#87ceeb',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 