import IForecast from './IForecastData'

export default interface IWeatherData {
    temperature: number;
    icon: string;
    date: string;
    forecasts: IForecast[];

}