const path = require("path");

module.exports = {
  entry: "./src/index.js",
  target: "web",
  devServer: {
    watchFiles: ["src/*.html"],
    port: 8080,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[ext]",
            outputPath: "fonts",
          },
        },
        type: "javascript/auto",
      },
    ],
  },
};
