const path = require("path")
const WebpackBar = require("webpackbar")
const DefinePlugin = require('webpack/lib/DefinePlugin');

const { VueLoaderPlugin }=require("vue-loader")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

console.log('hi', process.env.NODE_ENV)

module.exports = {
  mode: "production",
  resolve: {
    extensions: ["*", ".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  entry: {
    index: path.join(__dirname, "../src/main.js"),
  },
  output: {
    filename: "[name].[chunkhash:4].js",
    path: path.join(__dirname, "../dist"), 
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new WebpackBar(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CssMinimizerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 不在生成license文件
      }),
    ],
  },
  stats: {
    modules: false,
  },
  module:{
    rules:[
      {
        test: /\.(bmp|gif|png|jpe?g)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        }
      },
      {
        oneOf: [
          {
            test:/\.css$/,
            use:[
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader?minimize",
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: "postcss-loader",
              },
              ],
          },
          {
            test: /\.(scss)$/,
            use: [
              "style-loader", 
              {
                loader: "css-loader?minimize",
                options: {
                importLoaders: 2,
                },
              }, 
              {
                loader: "postcss-loader",
              },
              {
                loader: 'sass-loader',
                options: {
                  additionalData: `@import "./src/assets/scss/light.scss";`
                },
              },
            ],
          },
        ]
      },
      {
        test:/\.vue$/,
        use:["vue-loader"]
      },
    ],
  },
}