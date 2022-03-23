const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    about: './src/about.js',
    menu: './src/menu.js',
    contact: './src/contact.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant LA CABEZA',
      template: './src/default.html',
    }),
  ],
  output: {
    filename: '[name].restaurant.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
