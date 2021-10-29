const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

require('dotenv').config();

const DEFAULT_PORT = 3001;
const port = process.env.PORT || DEFAULT_PORT;

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.s?css$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js?v=[fullhash]',
    publicPath: `http://localhost:${port}/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MFEReact',
      filename: 'remoteEntry.js',
      exposes: {
        '.': './src/bootstrap',
        './counter': './src/pages/counter',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: port,
    historyApiFallback: true
  },
};
