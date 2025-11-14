import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          50: '#E8EEF5',
          100: '#C5D5E8',
          200: '#9FB9DA',
          300: '#799DCC',
          400: '#5C87C2',
          500: '#1E3A5F',
          600: '#1A3454',
          700: '#152B46',
          800: '#0F1F33',
          900: '#0A1420',
        },
        accent: {
          DEFAULT: '#D4A574',
          50: '#FBF7F2',
          100: '#F5EBE0',
          200: '#EDDBCA',
          300: '#E5C9B0',
          400: '#DCB792',
          500: '#D4A574',
          600: '#C28D55',
          700: '#A67542',
          800: '#7D5832',
          900: '#543C22',
        },
        navy: {
          DEFAULT: '#0B1F3B',
          light: '#1E3A5F',
          dark: '#050F1F',
        },
        gold: {
          DEFAULT: '#D4A574',
          light: '#E5C9B0',
          dark: '#A67542',
        },
        neutral: {
          sand: '#F7F6F3',
          slate: '#0B1320',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'hero-gradient': 'linear-gradient(135deg, #0A1420 0%, #1E3A5F 50%, #0B1F3B 100%)',
        'hero-image': "url('/hero-logo.jpg')",
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(215, 65%, 20%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(30, 48%, 65%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(215, 100%, 10%, 0.3) 0px, transparent 50%)',
        'geometric-pattern': "url('/geometric-pattern.svg')",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 31, 59, 0.15)',
        'glass-lg': '0 20px 60px 0 rgba(11, 31, 59, 0.3)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.12)',
        'float': '0 20px 60px rgba(30, 58, 95, 0.2)',
        'glow': '0 0 40px rgba(212, 165, 116, 0.4)',
        'gold-glow': '0 0 60px rgba(212, 165, 116, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

