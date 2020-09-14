// const merge = import("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader")
      .tap(options => {
        options.getCustomTransformers = () => ({
          before: [
            tsImportPluginFactory({
              libraryName: "vant"
            })
          ]
        });
        return options;
      });
    config.devServer.proxy({
      "/api": {
        target: "https://gank.io/"
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
