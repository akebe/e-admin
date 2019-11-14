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
};