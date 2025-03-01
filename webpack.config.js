const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',  // Точка входа для Webpack
  output: {
    filename: 'bundle.js',  // Имя скомпилированного файла
    path: path.resolve(__dirname, 'dist'),  // Папка для сборки
  },
  mode: 'development',  // Режим разработки
  devServer: {
    historyApiFallback: true,
    static: './dist',  // Папка с файлы для сервера
    port: 8080,  // Порт для локального сервера
    open: true,  // Открытие браузера автоматически
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Правило для обработки CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,  // Правило для обработки JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Преобразование ES6+
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Обработка изображений
        type: 'asset/resource',  // Обработка файлов как ресурсы
        generator: {
          filename: 'icons/[name][ext]',  // Путь к изображению в папке dist
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Очистка папки dist
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',  // Шаблон для HTML
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact.html',  // Шаблон для HTML
      filename: 'contact.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/ourmenu.html',  // Шаблон для HTML
      filename: 'ourmenu.html',
    }),
  ],
};
