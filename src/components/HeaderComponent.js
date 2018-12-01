"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class HeaderComponent extends React.Component {
    render() {
        return (React.createElement("header", { className: "header" },
            React.createElement("h1", { className: "header__title" }, "Weather PWA"),
            React.createElement("button", { id: "butRefresh", className: "headerButton", "aria-label": "Refresh" }),
            React.createElement("button", { id: "butAdd", className: "headerButton", "aria-label": "Add" })));
    }
}
exports.default = HeaderComponent;
