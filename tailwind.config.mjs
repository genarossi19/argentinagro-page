/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                logo: {
                    blue: '#2452AA',
                    red: '#FF2322'
                }
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                        opacity: '0'
                    },
                    '50%': {
                        height: 'var(--radix-accordion-content-height)',
                        opacity: '1'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                        opacity: '1'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                        opacity: '1'
                    },
                    '50%': {
                        height: '0',
                        opacity: '0'
                    },
                    to: {
                        height: '0',
                        opacity: '0'
                    }
                },
                'fade-in': {
                    from: {
                        opacity: '0'
                    },
                    '20%': {
                        opacity: '0.2'
                    },
                    '40%': {
                        opacity: '0.4'
                    },
                    '60%': {
                        opacity: '0.6'
                    },
                    '80%': {
                        opacity: '0.8'
                    },
                    to: {
                        opacity: '1'
                    }
                },
                'fade-in-up': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '20%': {
                        opacity: '0.2',
                        transform: 'translateY(16px)'
                    },
                    '40%': {
                        opacity: '0.4',
                        transform: 'translateY(12px)'
                    },
                    '60%': {
                        opacity: '0.6',
                        transform: 'translateY(8px)'
                    },
                    '80%': {
                        opacity: '0.8',
                        transform: 'translateY(4px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-down': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(-20px)'
                    },
                    '20%': {
                        opacity: '0.2',
                        transform: 'translateY(-16px)'
                    },
                    '40%': {
                        opacity: '0.4',
                        transform: 'translateY(-12px)'
                    },
                    '60%': {
                        opacity: '0.6',
                        transform: 'translateY(-8px)'
                    },
                    '80%': {
                        opacity: '0.8',
                        transform: 'translateY(-4px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-left': {
                    from: {
                        opacity: '0',
                        transform: 'translateX(-20px)'
                    },
                    '20%': {
                        opacity: '0.2',
                        transform: 'translateX(-16px)'
                    },
                    '40%': {
                        opacity: '0.4',
                        transform: 'translateX(-12px)'
                    },
                    '60%': {
                        opacity: '0.6',
                        transform: 'translateX(-8px)'
                    },
                    '80%': {
                        opacity: '0.8',
                        transform: 'translateX(-4px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'fade-in-right': {
                    from: {
                        opacity: '0',
                        transform: 'translateX(20px)'
                    },
                    '20%': {
                        opacity: '0.2',
                        transform: 'translateX(16px)'
                    },
                    '40%': {
                        opacity: '0.4',
                        transform: 'translateX(12px)'
                    },
                    '60%': {
                        opacity: '0.6',
                        transform: 'translateX(8px)'
                    },
                    '80%': {
                        opacity: '0.8',
                        transform: 'translateX(4px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'stagger-cards': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.5s ease-out',
                'accordion-up': 'accordion-up 0.5s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-in-left': 'fade-in-left 0.5s ease-out',
                'fade-in-right': 'fade-in-right 0.5s ease-out',
                'stagger-cards': 'stagger-cards 0.5s ease-out forwards'
            }
        }
    },
    plugins: [tailwindcssAnimate]
};


