const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.jsx"),
  mode: "development",
  resolve: {
    extensions: [".jsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: path.resolve(__dirname, "..", "src"), // Ensure the context is set correctly
              outputPath: "assets/", // Customize the output path if necessary
            },
          },
        ],
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    })
    // "babel-plugin-styled-components",
  ],
  stats: "errors-only",
};
