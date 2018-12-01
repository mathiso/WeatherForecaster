import IWeatherData from "../interfaces/data/IWeatherData";
import IForecastData from "../interfaces/data/IForecastData";

export default class WeatherData implements IWeatherData {

constructor(temperature: number, icon: string, date: string, forecasts: IForecastData[]){
    this.temperature = temperature;
    this.icon = icon;
    this.date = date;
    this.forecasts = this.forecasts;

}

    temperature: number;
    icon: string;
    date: string;
    forecasts: IForecastData[];
}