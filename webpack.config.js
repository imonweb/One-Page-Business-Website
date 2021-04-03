const path = require('path')
const webpack = require('webpack')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const bootstrap = require('bootstrap')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

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
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader',  'sass-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
      },
      {
        test: /bootstrap\/dist\/js\/umd\//, 
        use: 'imports-loader?jQuery=jquery'
      },
      
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
    
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      'window.Tether': 'tether',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    })
  ]
  
}