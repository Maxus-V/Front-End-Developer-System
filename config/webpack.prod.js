const path = require("path")
const WebpackBar = require("webpackbar")
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const { VueLoaderPlugin }=require("vue-loader")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
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
    modules: [path.resolve(__dirname, "../node_modules")],
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
    // new ParallelUglifyPlugin({
    //   cacheDir: '',
    //   sourceMap: false,
    //   uglifyJS: {
    //     output: {
    //       comments: false
    //     },
    //     warnings: false
    //   },
    // }),
    new WebpackBar(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:6].css",
      chunkFilename: "[id].css",
    }),
    new CssMinimizerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        inifyCSS: true
      },
    }),
    // new OptimizeCSSAssetsPlugin({
    //   cssProcessor: require("cssnano"),
    //   cssProcessorOptions: {
    //     discardComments: { removeAll: true }
    //   }
    //  }),
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
        },
      },
      {
        oneOf: [
          {
            test:/\.css$/,
            include: path.join(__dirname, "../src"),
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
            include: path.join(__dirname, "../src"),
            use: [
              "style-loader", 
              {
                loader: "css-loader?minimize",
                options: {
                  importLoaders: 2,
                  modules: true,
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