const path = require('path');

module.exports = {
  entry: './app/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        },
      ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './app/'
  }
};
