var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
     loaders: [
      {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /sinon\.js$/, loader: "imports?define=>false,require=>false"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(gif|png|jpe?g)$/i, loader: "url"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
      {test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery'},
      {test: /\.json$/, loader: "url"},
      { test: require.resolve("pace-progress"), loader: "imports?define=>false" }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ],
  resolve: {
  alias: {
    jquery: 'jquery/src/jquery',
    sinon: 'sinon/pkg/sinon.js'
  },
  root: [
    path.resolve('./client/app'),
    path.resolve('./node_modules'),
    path.resolve('./client')
  ]
}
};
