const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    before: function(app, server){
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000
  },
  mode: 'development',
  

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
   title: "WebPack Fundamentals"
 })

  ]
}