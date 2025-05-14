// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. Ponto de entrada
  entry: './src/components/App.js',

  // 2. Onde vai sair o bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,            // limpa dist antes de cada build
  },

  // 3. Loaders para JS e CSS
  module: {
    rules: [
      {
        test: /\.js$/,      // todos os arquivos .js
        exclude: /node_modules/,
        use: 'babel-loader' // precisa do babel-loader instalado
      },
      {
        test: /\.css$/,     // para importar CSS dentro do JS (opcional)
        use: ['style-loader','css-loader']
      }
    ]
  },

  // 4. Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],

  // 5. Modo e servidor de dev
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true,
    open: true
  }
};
