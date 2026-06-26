/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        elegance: {
          bg: '#0f1419',
          surface: '#151b22',
          surfaceAlt: '#1a212a',
          border: '#28323d',
          gold: '#c9a962',
          goldSoft: '#e3d2a4',
          ink: '#eef1f4',
          muted: '#8d98a6',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        gold: '0 0 50px -12px rgba(201, 169, 98, 0.35)',
        goldTight: '0 0 24px -6px rgba(201, 169, 98, 0.45)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 50% -10%, rgba(201,169,98,0.10), transparent 55%)',
      },
    },
  },
  plugins: [],
}
