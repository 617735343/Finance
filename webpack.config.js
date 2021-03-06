const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ];
  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin("style.css", {
        ignoreOrder: true
      }),
      new UglifyJsPlugin({
        sourceMap: true
      })
    )
  }
  return {
    entry: ['./app/js/viewport.js', './app/js/main.js'],
    devtool: 'source-map',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:9000',
          pathRewrite: {'^/api' : '/mock'}
        }
      },
      contentBase: path.join(__dirname, 'static'),
      // contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true,
      // before: require('./static/mock'),//引入mock/index.js
      
    },
    module: {
      rules: [{
        test: /\.html$/,
        use: ['cache-loader', 'html-loader']
      }, {
        test: /\.vue$/,
        use: [
          'cache-loader',
          'vue-loader'
        ]
      }, {
        test: /\.(woff|eot|ttf|png|jpe?g|gif|svg)(\?.*)?$/,
        use: ['url-loader'],
        // loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
      },{
        test: /\.scss$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]'
              }
            }, {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }, {
          use: [
            'vue-style-loader',
            'css-loader', {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }],
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }]
    },
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    mode: 'development',
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};