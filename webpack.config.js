const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const DEVE = 'development';
const PROD = 'production';
const pJoin = str => path.join(__dirname, str);

const isDev = process.env.NODE_ENV === DEVE;

let baseConfig = {
  mode: isDev ? DEVE : PROD,
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              // 为 antd 的 style: true 即 less 加载
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    path: pJoin('dist'),
    publicPath: '/',
    filename: '[name]_[hash].js',
    chunkFilename: 'chunk_[name]_[contenthash].js',
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

if (isDev) {
  // development
  baseConfig = merge(baseConfig, {
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'cheap-source-map',
    devServer: {
      contentBase: './dist',
      port: 3000,
      historyApiFallback: true,
      hot: true,
      overlay: {
        errors: true,
      },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
} else {
  // production
  baseConfig = merge(baseConfig, {
    devtool: 'cheap-module-source-map',
  });
}

module.exports = baseConfig;
