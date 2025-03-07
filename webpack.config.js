const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/scripts/index.js',  // Путь к main.js в папке src
    contact: './src/scripts/contact.js',  // Путь к contact.js
    ourmenu: './src/scripts/ourmenu.js',  // Путь к ourmenu.js
    aboutus: './src/scripts/aboutus.js',  // Путь к ourmenu.js
  },
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/team-rest/',  // Укажи имя репозитория GitHub в этом пути
  },
  
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),  // Извлечение CSS в отдельные файлы
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',  // Шаблон для index.html
      chunks: ['index'],  // Указываем только нужный chunk
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/pages/contact.html',  // Шаблон для contact.html
      chunks: ['contact'],  // Указываем только нужный chunk
    }),
    new HtmlWebpackPlugin({
      filename: 'ourmenu.html',
      template: './src/pages/ourmenu.html',  // Шаблон для ourmenu.html
      chunks: ['ourmenu'],  // Указываем только нужный chunk
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutus.html',
      template: './src/pages/aboutus.html',  // Шаблон для aboutus.html
      chunks: ['aboutus'],  // Указываем только нужный chunk
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  mode: 'development',
};
