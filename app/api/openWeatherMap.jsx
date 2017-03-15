var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=57de628a607767eeab5cce0d19c63d22';

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(url).then((res) =>{
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },(res) => {
      throw new Error(res.data.message);
    });
  }
};
