module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: require.resolve('./src/utils/markdown-loader'),
          },
        ],
      },
    );
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  outputDir: 'docs',
  publicPath: './',
};