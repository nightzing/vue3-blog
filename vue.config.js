module.exports = {
  chainWebpack: config => {
    config.devServer.proxy({
      "/api": {
        target: "https://cnodejs.org/"
      }
    });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/global.scss";`
      }
    }
  }
};
