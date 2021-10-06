module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.bilibili.com",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
