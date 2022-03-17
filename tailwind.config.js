module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
        padding: {
          '5px': '5px',
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
        },
        spacing: {
          '5px': '5px',
        },
        objectPosition: {
          'center-bottom': 'center bottom',
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        spacing: {
          '1': '8px',
          '2': '12px',
          '3': '16px',
          '4': '24px',
          '5': '32px',
          '6': '48px',
        }
        
      }
    },
  },
  plugins: [],
}