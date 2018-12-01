import IForecastData from "../interfaces/data/IForecastData";

export default class ForecastData implements IForecastData {
    icon: string;
    day: string;
    low: number;
    high: number;

    constructor(icon: string, day: string, low: number, high: number) {
        this.icon = icon;
        this.day = day;
        this.low = low;
        this.high = high;
    }
}