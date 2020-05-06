const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  output: {
    filename: "./assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 5000,
    // compress: true,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/img",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/img",
        to: "./assets/img/[name].[ext]",
      },
    ]),
  ],
});
