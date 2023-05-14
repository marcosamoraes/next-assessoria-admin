/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dcba73',
        success: '#4caf50',
        danger: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
