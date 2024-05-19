import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      backgroundSize: {
        'close':'300%',
        'close-mobile': '800%'
      },
      height: {
        '140px': 'calc(9rem - 4px)',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        open:{
          '0%': {
            opacity:'0%'
          },
          '100%': {
            opacity:'100%'
          }
        },
        openB: {
          '0%': {
            top:'5rem',
            opacity:'0%'
          },
          '100%': {
            top:'2.5rem',
            opacity:'100%'
          }
        },
      },
      animation: {
        "open":"open 0.2s linear forwards",
        "open-b":"openB 0.1s linear forwards",
      }
    },
    
    
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
