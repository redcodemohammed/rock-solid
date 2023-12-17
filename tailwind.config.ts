import type { Config } from 'tailwindcss';
export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
            },
            screens: {
                xs: '475px'
            },
            animation: {
              
            },
            keyframes: {
            }
        }
    }
};
