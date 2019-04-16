module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js?/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}