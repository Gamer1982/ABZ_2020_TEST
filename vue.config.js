module.exports = {
	publicPath: '/ABZ_2020_TEST/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};