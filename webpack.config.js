var path = require('path');
 
module.exports = {
   mode: 'development',
  entry: "./app/app.jsx", // входная точка - исходный файл
  output:{
      path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
      publicPath: '/public/',
      filename: "bundle.js"       // название создаваемого файла
  },  
  module:{
      rules:[   //загрузчик для js
          {
              test: /\.jsx?$/, // определяем тип файлов
              exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
              loader: "babel-loader",   // определяем загрузчик
              options:{
                  presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
              }
          },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
      ]
  }
}