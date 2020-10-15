const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval-source-map', // none

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },

  module: {
    rules: [
      // babel
      {
        test: /\.(js|jsx)$/,
        // exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },

      // HTML LOADER + plug
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },

      // FILE LOADER - image
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          output: 'img/',
          // url path inside css AND html after build CHECK
          publicPath: '../',
        },
      },

      // FILE LOADER - icon
      {
        test: /\.(svg)$/,
        loader: 'file-loader',
        options: {
          name: 'ico/[name].[ext]',
          output: 'ico/',
        },
      },

      // FILE LOADER - font
      {
        test: /\.(woff|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },

      // CSS LOADER global
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },

      // CSS LOADER modules
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },

      // SASS LOADER
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: false,
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    new CssMinimizerPlugin(),
  ],
};
