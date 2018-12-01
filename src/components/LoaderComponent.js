"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class LoaderComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: "loader" },
            React.createElement("svg", { viewBox: "0 0 32 32", width: "32", height: "32" },
                React.createElement("circle", { id: "spinner", cx: "16", cy: "16", r: "14", fill: "none" }))));
    }
}
exports.default = LoaderComponent;
