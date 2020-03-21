module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: "vue-markdown-loader"
        }
      ]
    }
  }
};
