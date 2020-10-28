module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    library: "ALTEditor",
    libraryExport: "ALTEditor",
    libraryTarget: "umd",
  },
};
