// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: "@import \"@/assets/styles/main.sass\""
      }
    }
  }
};