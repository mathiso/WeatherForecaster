"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class OneDayComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "oneday" },
            React.createElement("div", { className: "date" }, this.props.forecast.day),
            React.createElement("div", { className: "icon" }, this.props.forecast.icon),
            React.createElement("div", { className: "temp-high" },
                React.createElement("span", { className: "value" }, this.props.forecast.high),
                "\u00B0"),
            React.createElement("div", { className: "temp-low" },
                React.createElement("span", { className: "value" }, this.props.forecast.low),
                "\u00B0")));
    }
}
exports.default = OneDayComponent;
