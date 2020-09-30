const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.symlinks(true); // 修复热更新失效
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
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
