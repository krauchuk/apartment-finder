const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@fakeApi': path.resolve(__dirname, 'fakeApi'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
}

module.exports = webpackConfig
