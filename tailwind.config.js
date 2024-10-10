/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1820px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        pink: {
          // ... (pink color values remain the same)
        },
        pinkSecondary: {
          // ... (pinkSecondary color values remain the same)
        },
        darkPink: {
          // ... (darkPink color values remain the same)
        },
        sweetPink: {
          // ... (sweetPink color values remain the same)
        },
        blue: {
          // ... (blue color values remain the same)
        },
        blueSecondary: {
          // ... (blueSecondary color values remain the same)
        },
        darkBlue: {
          // ... (darkBlue color values remain the same)
        },
        sweetBlue: {
          // ... (sweetBlue color values remain the same)
        },
        green: {
          // ... (green color values remain the same)
        },
        greenSecondary: {
          // ... (greenSecondary color values remain the same)
        },
        darkGreen: {
          // ... (darkGreen color values remain the same)
        },
        sweetGreen: {
          // ... (sweetGreen color values remain the same)
        },
        gray: {
          // ... (gray color values remain the same)
        },
        purple: {
          50: '#f9f0f7',
          100: '#f2e1ef',
          200: '#e5c3df',
          300: '#d7a5cf',
          400: '#c987bf',
          500: '#bb69af',
          600: '#a14c94',
          700: '#863e7a',
          800: '#6b3060',
          900: '#490a3a', // Main purple color
        },
      },
      textColor: {
        body: '#490a3a'
      },
      fontFamily: {
        heading: [
          'Mona Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        body: [
          'Mona Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        // ... (other font families remain the same)
      },
      animation: {
        'flow': 'flow 5s ease-in-out infinite',
        'falling-star-1': 'fallAndFade 5s ease-in-out infinite',
        'falling-star-2': 'fallAndFade 5s ease-in-out 1.67s infinite',
        'falling-star-3': 'fallAndFade 5s ease-in-out 3.33s infinite',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        flow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        fallAndFade: {
          '0%': { opacity: 0, transform: 'translateY(-100%) scale(0.5)' },
          '50%': { opacity: 1, transform: 'translateY(0) scale(1)' },
          '100%': { opacity: 0, transform: 'translateY(100%) scale(0.5)' },
        }
      },
      backgroundColor: {
        'darkPink-900': '#1a0a14', // Adjust this color to match your design
      },
      // ... (other theme extensions remain the same)
    },
  },
  plugins: [require("@tailwindcss/typography")],
};