const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/analytics.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "analytics.js",
    library: "analytics",
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  mode: "production",
};
