const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9de12a1b548949e5f7a84b94f549cec8&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '&units=m';

    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to server', undefined);
        } else if(body.error) {
            callback('Unable to find weather. Please try another search', undefined);
        } else {
            callback(undefined, 
                `${body.current.weather_descriptions}. It is currently ${body.current.temperature}°C. It feels like ${body.current.feelslike}°C.`
              
            );
        }
    });
};

module.exports = forecast;