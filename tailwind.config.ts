import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey1: '#737373',
        grey2: '#D9D9D9',
        grey3: '#FAFAFA',
        grey4: '#AAA',
        gold: '#D9B166',
        green1:"#0A4030",
        greenOverlay: 'rgba(10, 64, 48, 0.85)',
        goldBg: 'rgba(217, 177, 102, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
    },
  },
  plugins: [],
}
export default config
