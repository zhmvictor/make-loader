const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  // 配置loader可能出现的路径
  // 解析loader时，先从 node_modules 文件夹里找，找不到再去 ./loader 文件夹下找。
  resolveLoader: {
    modules: ['node_modules', './loaders'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'replaceLoader',
        }, {
          loader: 'replaceLoaderAsync',
          options: {
            name: 'lee'
          }
        }],
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};