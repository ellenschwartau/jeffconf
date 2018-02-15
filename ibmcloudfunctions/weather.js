const request = require("request");

function main(params) {
    const location = params.location || "Hamburg";
    const url = "https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + location + "')&format=json";

    return new Promise(function(resolve, reject) {
        request.get(url, function(error, response, body) {
            if (error) {
                reject(error);
            }
            else {
                const { text, temp } = JSON.parse(body).query.results.channel.item.condition;
                resolve({params: "It is " + temp + " degrees Fahrenheit in " + location + " and " + text});
            }
        });
    });
}