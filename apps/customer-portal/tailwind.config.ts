import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: { 50:'#FFF9E6',100:'#FFF0BF',200:'#FFE699',300:'#FFD966',400:'#FFCC33',500:'#D4AF37',600:'#B8960E',700:'#8B7200',800:'#5C4B00',900:'#2E2500' },
        navy: { 50:'#EDF2F8',100:'#D5E0EE',200:'#A8BFDB',300:'#7B9DC8',400:'#4E7CB5',500:'#1D3557',600:'#172C47',700:'#112237',800:'#0B1927',900:'#050F17' },
        dark: { 50:'#F1F5F9',100:'#CBD5E1',200:'#94A3B8',300:'#64748B',400:'#475569',500:'#334155',600:'#1E293B',700:'#162032',800:'#0F172A',900:'#0A0F1A' },
        surface: { light:'#F8F9FA',card:'#FFFFFF',dark:'#0F172A','dark-card':'#1E293B' },
        foundation: { 50:'#FFF0F3',100:'#FFE0E8',200:'#FFC2D1',300:'#FFA3BA',400:'#FF85A3',baby:'#F4C2C2',hot:'#E91E6C',maroon:'#800040',dark:'#4A0025' },
        sidebar: { DEFAULT:'#0B1D33', light:'#122B45', hover:'#1A3A5C', active:'#D4AF37' },
      },
      fontFamily: { sans:['Inter','system-ui','sans-serif'], display:['Poppins','system-ui','sans-serif'] },
      boxShadow: {
        'enterprise': '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
        'enterprise-lg': '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD966 50%, #B8960E 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1D3557 40%, #2E2500 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: { '0%':{ opacity:'0' },'100%':{ opacity:'1' } },
        slideUp: { '0%':{ opacity:'0', transform:'translateY(30px)' },'100%':{ opacity:'1', transform:'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

export default config;
