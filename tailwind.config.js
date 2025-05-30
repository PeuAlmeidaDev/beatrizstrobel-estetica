/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      opacity: {
        '90': '0.9',
      },
    },
  },
  plugins: [],
  // Ativar todas as variantes para propriedades de opacidade
  safelist: [
    {
      pattern: /bg-opacity-\d+/,
      variants: ['hover'],
    },
  ],
} 