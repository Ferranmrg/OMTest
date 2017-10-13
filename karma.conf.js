const webpack = require('webpack');
const API_URL = '';
var path = require('path');

module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-stub-promise', 'sinon'],

    // list of files/patterns to load in the browser
    files: [
      {
        pattern: 'spec.bundle.js',
        watched: false,
      },
      './node_modules/phantomjs-polyfill-find/find-polyfill.js',
      './node_modules/phantomjs-polyfill-includes/includes-polyfill.js',
      './node_modules/phantomjs-polyfill-string-includes/index.js',
    ],

    // files to exclude
    exclude: [],

    plugins: [
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-sinon'),
      require('karma-sinon-stub-promise'),
      require('karma-sourcemap-loader'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-notify-reporter'),
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: [/app\/lib/, /node_modules/],
            loader: 'ng-annotate!babel',
          }, {
            test: /\.html$/,
            loader: 'raw',
          }, {
            test: /\.(scss|sass)$/,
            loader: 'style!css!sass',
          }, {
            test: /\.css$/,
            loader: 'style!css',
          }, {
            test: /sinon\.js$/,
            loader: 'imports?define=>false,require=>false',
          }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file',
          }, {
            test: /\.(woff|woff2)$/,
            loader: 'url?prefix=font/&limit=5000',
          }, {
            test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?name=public/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream',
          }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?name=public/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream',
          }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml',
          }, {
            test: /bootstrap\/dist\/js\/umd\//,
            loader: 'imports?jQuery=jquery',
          }, {
            test: /\.(gif|png|jpe?g)$/i,
            loader: 'file',
          }, {
            test: require.resolve('pace-progress'),
            loader: 'imports?define=>false',
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            API_URL: JSON.stringify(API_URL),
          },
        }),
      ],
      resolve: {
        alias: {
          jquery: 'jquery/src/jquery',
          sinon: 'sinon/pkg/sinon.js',
        },
        root: [
          path.resolve('./client/app'),
          path.resolve('./node_modules'),
          path.resolve('./client'),
        ],
      },
    },

    webpackServer: {
      noInfo: true, // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'notify'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    singleRun: true,
  });
};
