/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '150px', 'max': '340px'},        // => @media (min-height: 800px) { ... }
      },

      animation:{
        'slow-animation':'bounce 7s infinite',
      },
      backgroundImage: {
        
        
        'profile': "url('/src/Assets/profile.jpg')",
        'bootstrap': "url('/src/Assets/bootstrap.png')",
        'dart': "url('/src/Assets/dart.png')",
        'figma': "url('/src/Assets/figma.png')",
        'git': "url('/src/Assets/git.png')",
        'github': "url('/src/Assets/github.png')",
        'laravel': "url('/src/Assets/laravel.png')",
        'nodejs': "url('/src/Assets/nodejs.png')",
        'php': "url('/src/Assets/php.png')",
        'flutter': "url('/src/Assets/flutter.png')",
        'html': "url('/src/Assets/html.png')",
        'tailwind': "url('/src/Assets/tailwind.png')",
        'mysql': "url('/src/Assets/mysql.png')",
        'firebase': "url('/src/Assets/firebase.png')",
        'css': "url('/src/Assets/css.png')",
        'devstudios': "url('/src/Assets/devstudios.png')",
        'whiteytb': "url('/src/Assets/whiteytb.png')",
        'whitefb': "url('/src/Assets/whitefb.png')",
        'whiteint': "url('/src/Assets/whiteinstagram.png')",
        'whiteln': "url('/src/Assets/whitelnk.png')",
        'wallnet': "url('/src/Assets/wallnet.png')",
        'eye': "url('/src/Assets/eye.png')",
        'githubicon': "url('/src/Assets/githubIcon.png')",
        'rmaj': "url('/src/Assets/rmaj.png')",
        'python': "url('/src/Assets/python.png')",
        'react': "url('/src/Assets/react.png')",
        'node': "url('/src/Assets/nodejs.png')",
        'youtube': "url('/src/Assets/youtube.png')",
        'linkedin': "url('/src/Assets/linkedin.png')",
        'github': "url('/src/Assets/github.png')",
        'whatsapp': "url('/src/Assets/whatsapp.png')",
        'js': "url('/src/Assets/js.png')",
      }
    },
  },
  plugins: [],
}