var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
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
      openWeatherMap: path.resolve('./app/api/openWeatherMap.jsx'),
      ErrorModal: path.resolve('./app/components/ErrorModal.jsx')
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
