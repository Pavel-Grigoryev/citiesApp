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
        helRegular: ['var(--font-helvetica-regular)'],
        helMedium: ['var(--font-helvetica-medium)'],
      },
      spacing: {
        0.75: '0.1875rem',
        2.75: '0.6875rem',
        4.25: '1.0625rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
