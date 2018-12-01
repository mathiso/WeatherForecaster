import * as React from "react";

import IWeather from '../interfaces/components/IWeather'
import OneDayComponent from "./OneDayComponent";


export default class WeatherComponent extends React.Component<IWeather, { weather }> {

  constructor(props: IWeather) {
    super(props);

  }

  render() {
    console.log("props", this.props)
var weatherData = this.props.weatherData;

    return (

      <div className="card cardTemplate weather-forecast">
        <div className="city-key"></div>
        <div className="card-last-updated"></div>
        <div className="location"></div>
        <div className="date"></div>
        <div className="description"></div>
        <div className="current">
          <div className="visual">
            <div className="icon"></div>
            <div className="temperature">
              <span className="value">{weatherData.temperature}</span><span className="scale">°F</span>
            </div>
          </div>
          <div className="description">
            <div className="humidity"></div>
            <div className="wind">
              <span className="value"></span>
              <span className="scale">mph</span>
              <span className="direction"></span>°
          </div>
            <div className="sunrise"></div>
            <div className="sunset"></div>
          </div>
        </div>
        <div className="future">
          {
            (this.props.weatherData.forecasts != undefined) ?
            
              this.props.weatherData.forecasts.map((forecast, i) => {
                // Return the element. Also pass key     
                return (<OneDayComponent forecast={forecast} />)
            })
           : null
          }
        </div>
      </div>
    );
  }
}