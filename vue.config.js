const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    proxy: process.env.VUE_APP_BACKEND_ENV || "http://localhost:8000",
  },
  transpileDependencies: true,
});
