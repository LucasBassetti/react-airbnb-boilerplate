const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'docs/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'app/'),
        from: 'index.html',
        to: path.resolve(__dirname, 'docs'),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};
