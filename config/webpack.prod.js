const path = require("path")
// const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin }=require("vue-loader")

module.exports = {
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
    filename: "[name].[hash:4].js",
    path: path.join(__dirname, "../dist"),
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, "../index.html"),
    //   filename: "index.html",
    // }),
    new VueLoaderPlugin(),
  ],
  module:{
    rules:[
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
          test: /\.(scss)$/,
          use: [
            "style-loader", 
            "css-loader", 
            {
              loader: 'sass-loader',
              options: {
                additionalData: `@import "./src/assets/scss/light.scss";`
              },
            },
          ],
        },
        {
            test:/\.vue$/,
            use:["vue-loader"]
        },
    ]
  },
  mode: "production",
}