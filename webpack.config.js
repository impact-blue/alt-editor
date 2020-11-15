module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    filename: "index.js",
    library: "ALTEditor",
    libraryExport: "ALTEditor",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
