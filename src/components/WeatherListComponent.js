"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WeatherComponent_1 = require("./WeatherComponent");
const WeatherData_1 = require("../data/WeatherData");
const ForecastData_1 = require("../data/ForecastData");
class WeatherListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherList: [],
        };
    }
    componentDidMount() {
        fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(10)%20where%20text%3D%22${this.props.searchTerm}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
            .then(results => {
            return results.json();
        })
            .then(data => {
            var weatherList = data.query.results.channel.map((weatherListItemData, i) => {
                var forecasts = null;
                if (weatherListItemData.item != undefined) {
                    forecasts = weatherListItemData.item.forecast.map((forecast, i) => {
                        return new ForecastData_1.default(forecast.code, forecast.day, forecast.low, forecast.high);
                    });
                }
                // Map to new Weatherdata
                var weatherData = new WeatherData_1.default(23, "", "", forecasts);
                // Return the element. Also pass key     
                return (React.createElement(WeatherComponent_1.default, { weatherData: weatherData }));
            });
            this.setState({
                weatherList: weatherList
            });
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Found weather"),
            this.state.weatherList));
    }
}
exports.default = WeatherListComponent;
