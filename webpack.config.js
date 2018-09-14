const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const dotenv = require('dotenv')

module.exports = (env, options) => {
  const envs = dotenv.config().parsed

  const envKeys = Object.keys(envs).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envs[next])
    return prev
  }, {})

  return ({
    entry: [
      './src/index.js'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [options.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: [options.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devtool: options.mode === 'production' ? '(none)' : 'source-map',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      filename: '[name].[contenthash].js'
    },
    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    }
  })
}
