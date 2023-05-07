/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    colors: {
      "white": "#fff",
      "black": "#000",
      "orange": "#E64926",
      "blue-dark": "#0F303F",
      "blue-medium": "#254A5A",
      "beige-dark": "#CEC6C4",
      "beige-medium": "#EAE9E8"
    }
  }
};

