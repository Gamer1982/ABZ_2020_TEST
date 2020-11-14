module.exports = {
	publicPath: '/test/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};