// import { type Config } from "tailwindcss";
//
// export default {
//   content: [
//     "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
//   ],
// } satisfies Config;
import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        scaleIn: 'scaleIn 1s ease-out forwards',
        typing: 'typing 4s steps(30, end) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        typing: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' },
        },
      },
    },
  },
} satisfies Config;
