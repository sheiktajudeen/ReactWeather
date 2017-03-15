var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve('./app/components/Main.jsx'),
      Nav: path.resolve('./app/components/Nav.jsx'),
      Weather: path.resolve('./app/components/Weather.jsx'),
      About: path.resolve('./app/components/About.jsx'),
      Examples: path.resolve('./app/components/Examples.jsx'),
      WeatherForm: path.resolve('./app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve('./app/components/WeatherMessage.jsx'),
      openWeatherMap: path.resolve('./app/api/openWeatherMap.jsx')
    },
    extensions: ['.js','.jsx']
  },
  module:{
    loaders:[{
      loader:'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
};
