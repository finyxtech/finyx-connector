/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            'primary-blue': '#1F618D',
            'primary-yellow': '#F4D03F',
            'light-blue': '#85C1E9',
            'dark-blue': '#154360',
            'soft-yellow': '#FFF2CC',
            'neutral-gray': '#EAEDED',
            'charcoal-gray': '#4D5656',
          },
        },
      },
      plugins: [],
    }
