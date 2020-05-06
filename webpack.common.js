const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  // output: {
  //   filename: "./assets/js/bundle.[contentHash].js",
  //   path: path.resolve(__dirname, "dist"),
  //   publicPath: "/assets/",
  // },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              // modules: {
              //   localIdentName: "[local] _[hash:base64:5]",
              // },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "src", "index.html"),
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: false,
    //   },
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: "./src/img",
    //     to: "./assets/img",
    //   },
    // ]),
  ],
};
