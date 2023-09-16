/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            greenPrimary: '#80b235',
            greenPri600: '#5c8918',
            greenPri200: '#80b23552'
         }
      }
   },
   plugins: []
};
