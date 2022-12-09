/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        "custom-name": "url(https://cdn.offshorewind.biz/wp-content/uploads/sites/6/2021/03/03113012/bitcoin-1813503_960_720.jpg)",
      },
      backgroundSize:{
        "custom-name": "cover"
      },
      backgroundPosition:{
        "custom-name": "center"
      }
    },
  },
  plugins: [],
}

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgFYuWT_lQjC-SHdK7E0IBa0C-kMoN8L_sKjndMDS8Q&s