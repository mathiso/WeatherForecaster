"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const OneDayComponent_1 = require("./OneDayComponent");
class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (React.createElement("div", { className: "card cardTemplate weather-forecast" },
            React.createElement("div", { className: "city-key" }),
            React.createElement("div", { className: "card-last-updated" }),
            React.createElement("div", { className: "location" }),
            React.createElement("div", { className: "date" }),
            React.createElement("div", { className: "description" }),
            React.createElement("div", { className: "current" },
                React.createElement("div", { className: "visual" },
                    React.createElement("div", { className: "icon" }),
                    React.createElement("div", { className: "temperature" },
                        React.createElement("span", { className: "value" }),
                        React.createElement("span", { className: "scale" }, "\u00B0F"))),
                React.createElement("div", { className: "description" },
                    React.createElement("div", { className: "humidity" }),
                    React.createElement("div", { className: "wind" },
                        React.createElement("span", { className: "value" }),
                        React.createElement("span", { className: "scale" }, "mph"),
                        React.createElement("span", { className: "direction" }),
                        "\u00B0"),
                    React.createElement("div", { className: "sunrise" }),
                    React.createElement("div", { className: "sunset" }))),
            React.createElement("div", { className: "future" }, (this.props.weatherData.forecasts != undefined) ?
                this.props.weatherData.forecasts.map((forecast, i) => {
                    // Return the element. Also pass key     
                    return (React.createElement(OneDayComponent_1.default, { forecast: forecast }));
                })
                : null)));
    }
}
exports.default = WeatherComponent;
