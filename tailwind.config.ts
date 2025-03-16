
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Retro 80s color palette
				retro: {
					background: '#120B29',
					grid: '#271463',
					'neon-pink': '#FF3CAC',
					'neon-blue': '#2E73FF',
					'neon-cyan': '#0CECDD',
					'neon-green': '#14F195',
					'neon-purple': '#784DFD',
					'dark-purple': '#200B4B',
					black: '#000112',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 4px #fff, 0 0 10px #fff, 0 0 15px #FF3CAC, 0 0 20px #FF3CAC, 0 0 25px #FF3CAC'
					},
					'50%': { 
						textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 10px #0CECDD, 0 0 15px #0CECDD, 0 0 20px #0CECDD'
					}
				},
				'scan-line': {
					'0%': { 
						transform: 'translateY(-100%)'
					},
					'100%': { 
						transform: 'translateY(100%)'
					}
				},
				'crt-flicker': {
					'0%': { 
						opacity: '0.98'
					},
					'2%': { 
						opacity: '0.93'
					},
					'4%': { 
						opacity: '0.96'
					},
					'6%': { 
						opacity: '0.95'
					},
					'8%': { 
						opacity: '0.98'
					},
					'10%': { 
						opacity: '0.97'
					},
					'89%': { 
						opacity: '1'
					},
					'90%': { 
						opacity: '0.9'
					},
					'92%': { 
						opacity: '0.95'
					},
					'94%': { 
						opacity: '0.92'
					},
					'96%': { 
						opacity: '0.98'
					},
					'98%, 100%': { 
						opacity: '0.95'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-10px)'
					}
				},
				'background-pan': {
					'0%': { 
						backgroundPosition: '0% center'
					},
					'100%': { 
						backgroundPosition: '-200% center'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s infinite',
				'scan-line': 'scan-line 8s linear infinite',
				'crt-flicker': 'crt-flicker 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'background-pan': 'background-pan 3s linear infinite'
			},
			fontFamily: {
				'vt323': ['"VT323"', 'monospace'],
				'press-start': ['"Press Start 2P"', 'cursive'],
				'pixel': ['"Silkscreen"', 'cursive']
			},
			backgroundImage: {
				'grid-pattern': 'linear-gradient(#271463 1px, transparent 1px), linear-gradient(90deg, #271463 1px, transparent 1px)',
				'crt-overlay': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
