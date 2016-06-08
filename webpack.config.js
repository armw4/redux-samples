var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', 'whatwg-fetch', './client/index.js'],
  output: {
    path: './client/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader?cacheDirectory'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }]
  },
  postcss: function() {
    return [require('autoprefixer'), require('precss')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.template.html'
    }),
    new webpack.EnvironmentPlugin(['UPC_URL'])
  ],
  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
