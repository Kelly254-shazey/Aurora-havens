import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enterprise Industrial Palette
        // Surface: #F8F9FA (light) / #0F172A (dark)
        // Content: #1D3557 (light) / #F1F5F9 (dark)
        // Accent: Gold #D4AF37 / Baby Pink #F4C2C2

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

        // Enterprise Navy (primary content color in light mode)
        navy: {
          50: '#EDF2F8',
          100: '#D5E0EE',
          200: '#A8BFDB',
          300: '#7B9DC8',
          400: '#4E7CB5',
          500: '#1D3557',
          600: '#172C47',
          700: '#112237',
          800: '#0B1927',
          900: '#050F17',
        },

        // Deep Navy/Charcoal (dark mode base)
        dark: {
          50: '#F1F5F9',
          100: '#CBD5E1',
          200: '#94A3B8',
          300: '#64748B',
          400: '#475569',
          500: '#334155',
          600: '#1E293B',
          700: '#162032',
          800: '#0F172A',
          900: '#0A0F1A',
        },

        // Enterprise surfaces
        surface: {
          light: '#F8F9FA',
          card: '#FFFFFF',
          dark: '#0F172A',
          'dark-card': '#1E293B',
        },

        // Foundation: Baby Pink, Hot Pink, Maroon
        foundation: {
          50: '#FFF0F3',
          100: '#FFE0E8',
          200: '#FFC2D1',
          300: '#FFA3BA',
          400: '#FF85A3',
          baby: '#F4C2C2',
          hot: '#E91E6C',
          maroon: '#800040',
          dark: '#4A0025',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'enterprise-light': '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
        'enterprise-light-lg': '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
        'none': 'none',
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
        'dark-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        'foundation-gradient': 'linear-gradient(135deg, #800040 0%, #E91E6C 50%, #F4C2C2 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1D3557 40%, #2E2500 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
