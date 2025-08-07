const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Inter", "sans-serif"],
      helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      bignoodle: ['BigNoodleTitling', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px', 
        
      },
    },
    extend: {
      height: {
        header: "560px",
      },
      borderRadius: ['before'],
      
        colors: {
       limebg: '#F0FFD8',
        grey: '#7B7B7B',
        green:'#408733',
        darkgrey:'#3B3B3B',
        limeglow: '#D2FF90',
        lime2:'#B6DB79',
        softLime: '#D3FF91',
        forestGreen: '#438A28',
        greenLeaf: '#388229',
        limeLeaf: '#7CB91D',
        limeGreen: '#7FC315',
        sblack:'#0A1629',
        darkgreen:'#6AA921',
        darkgreen2:'#348129',
        greyblack:'#091529',
        greyblack2:'#2E3445',
        green:'#71AF20',
        offwhite:'#F4F4F4',
        grey1:'#B1B0B0',
        grey2:'#F5F5F5',
        brown:'#211F1F'

      },
        fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2.5rem' }], 
        'fz-40': '40px', 
      },
      backgroundImage: {
        "page-header": "url('/page-header-bg.jpg')",
        "contact-header": "url('/page-header-bg-2.jpg')",
        subscribe: "url('/subscribe-bg.jpg')",
        "app-download": "url('/app-download.jpg')",
        cta: "url('/cta-bg.png')",
        "cta-1": "url('/cta/cta-bg-1.png')",
        "cta-2": "url('/cta/cta-bg-2.png')",
        "cta-3": "url('/cta/cta-bg-3.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
