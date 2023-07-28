/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^via-/,
      /ˆfrom-/,
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
