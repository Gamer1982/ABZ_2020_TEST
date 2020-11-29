module.exports = {
  publicPath: "/ABZ2.github.io/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
