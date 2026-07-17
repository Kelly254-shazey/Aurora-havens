import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: { 50:'#FFF9E6',100:'#FFF0BF',200:'#FFE699',300:'#FFD966',400:'#FFCC33',500:'#D4AF37',600:'#B8960E',700:'#8B7200',800:'#5C4B00',900:'#2E2500' },
        dark: { 50:'#F5F5F5',100:'#E5E5E5',200:'#CCCCCC',300:'#999999',400:'#666666',500:'#333333',600:'#1A1A1A',700:'#111111',800:'#0A0A0A',900:'#000000' },
        foundation: { 50:'#FFF0F3',100:'#FFE0E8',200:'#FFC2D1',300:'#FFA3BA',400:'#FF85A3',baby:'#F4B9C8',hot:'#E91E6C',maroon:'#800040',dark:'#4A0025' },
        sidebar: { DEFAULT:'#0B1D33', light:'#122B45', hover:'#1A3A5C', active:'#D4AF37' },
      },
      fontFamily: { sans:['Inter','system-ui','sans-serif'], display:['Poppins','system-ui','sans-serif'] },
    },
  },
  plugins: [],
};

export default config;
