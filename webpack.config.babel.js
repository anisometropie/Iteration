const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules=true']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader?name=/[name].[ext]',
        options: {
          publicPath: '/',
          outputPath: 'public',
          name: '[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  mode: 'development'
}
