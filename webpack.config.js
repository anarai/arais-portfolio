const PATH = require('path');
const VUE_LOADER = require('vue-loader/lib/plugin');

const MODE = 'production';

module.exports = {
  entry: {
    'main': [
      PATH.resolve(__dirname, 'public/src/js/main.js')
    ],
  },
  output: {
    filename: '[name].js',
    path: PATH.resolve(__dirname, 'public/src/dest'),
    publicPath: '/',
  },
  mode: MODE,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              minimize: true,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')()
              ]
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: 'url-loader'
      },
      {
          test: /\.vue$/,
          loader: 'vue-loader'
      },
    ],
  },
  plugins: [
    new VUE_LOADER()
  ],
  resolve: {
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    open: true,
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
};