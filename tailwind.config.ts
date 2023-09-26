import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'primary-light-gray': '#F4F4F4',
        'primary-dark-gray': '#938DAD',
        'primary-white': '#FFFFFF',
        'primary-black': '#393B4F',
        'primary-red': '#D10708',
        'primary-blue': '#6BA4E9',
      },
    },
  },
  plugins: [],
};
export default config;
