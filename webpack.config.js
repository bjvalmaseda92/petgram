const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './public/index.html' }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your pet photos app',
      shortname: 'Petgram -🐱',
      description: 'Find pet photos and use it as wallpaper',
      background_color: '#fff',
      theme_color: '#8d00ff',
      icons: [
        {
          src: path.resolve('public/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable'
        }
      ]
    })],
  devServer: {
    historyApiFallback: true
  }
}
