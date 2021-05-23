


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        spin: 'spin 8s linear infinite',
        bounce: 'bounce 2s infinite',
        smallbounce : 'smallbounce 1s infinite'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateX(10px)'},
          '50%': { transform: 'translateY(0)'},  
        },
        smallbounce: {
          '0%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'},
          '100%': {transform: 'translateY(0)'}
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
}
