import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Realty/Properties - Black, White, Gold
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#D4AF37',
          600: '#B8960E',
          700: '#8B7200',
          800: '#5C4B00',
          900: '#2E2500',
        },
        dark: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1A1A1A',
          700: '#111111',
          800: '#0A0A0A',
          900: '#000000',
        },
        // Foundation: Baby Pink, Hot Pink, Maroon
        foundation: {
          50: '#FFF0F3',
          100: '#FFE0E8',
          200: '#FFC2D1',
          300: '#FFA3BA',
          400: '#FF85A3',
          baby: '#F4B9C8',
          hot: '#E91E6C',
          maroon: '#800040',
          dark: '#4A0025',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD966 50%, #B8960E 100%)',
        'dark-gradient': 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #333333 100%)',
        'foundation-gradient': 'linear-gradient(135deg, #800040 0%, #E91E6C 50%, #F4B9C8 100%)',
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #1A1A1A 40%, #2E2500 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
