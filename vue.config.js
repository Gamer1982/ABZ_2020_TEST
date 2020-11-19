module.exports = {
	publicPath: '/ABZ.github.io/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};