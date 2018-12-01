import * as React from "react";

import IWeatherList from '../interfaces/components/IWeatherList'
import WeatherComponent from './WeatherComponent'
import WeatherData from "../data/WeatherData";
import ForecastData from "../data/ForecastData";

export default class WeatherListComponent extends React.Component<IWeatherList, { weatherList }> {

  constructor(props: IWeatherList) {
    super(props);

    this.state = {
      weatherList: [],
    };

  }


  componentDidMount() {
    var url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(10)%20where%20text%3D%22${this.props.searchTerm}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    if ('caches' in window) {
      /*
       * Check if the service worker has already cached this city's weather
       * data. If the service worker has the data, then display the cached
       * data while the app fetches the latest data.
       */
      caches.match(url).then(function (response) {
        if (response) {
          response.json().then(function updateFromCache(data) {
            return this.processData(data);
          });
        }
      });
    }
    
    fetch(url)

      .then(results => {
        return results.json();
      })
      .then(data => {
        return this.processData(data);
      })
  }

  processData(data: any) {
    var weatherList = data.query.results.channel.map((weatherListItemData, i) => {
      var forecasts = null;

      if (weatherListItemData.item != undefined) {
        forecasts = weatherListItemData.item.forecast.map((forecast, i) => {
          return new ForecastData(forecast.code, forecast.day, forecast.low, forecast.high)
        });
      }

      // Map to new Weatherdata
      var weatherData: any = new WeatherData(23, "", "", forecasts);

      // Return the element. Also pass key     
      return (<WeatherComponent weatherData={weatherData} />)
    })

    this.setState({
      weatherList: weatherList
    });

  }

  render() {
    return (<div>
      <h1>Found weather</h1>

      {this.state.weatherList}

    </div>

    );
  }
}