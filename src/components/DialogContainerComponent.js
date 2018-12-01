"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class DialogContainerComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: "dialog-container" },
            React.createElement("div", { className: "dialog" },
                React.createElement("div", { className: "dialog-title" }, "Add new city"),
                React.createElement("div", { className: "dialog-body" },
                    React.createElement("select", { id: "selectCityToAdd" },
                        React.createElement("option", { value: "2357536" }, "Austin, TX"),
                        React.createElement("option", { value: "2367105" }, "Boston, MA"),
                        React.createElement("option", { value: "2379574" }, "Chicago, IL"),
                        React.createElement("option", { value: "2459115" }, "New York, NY"),
                        React.createElement("option", { value: "2475687" }, "Portland, OR"),
                        React.createElement("option", { value: "2487956" }, "San Francisco, CA"),
                        React.createElement("option", { value: "2490383" }, "Seattle, WA"))),
                React.createElement("div", { className: "dialog-buttons" },
                    React.createElement("button", { id: "butAddCity", className: "button" }, "Add"),
                    React.createElement("button", { id: "butAddCancel", className: "button" }, "Cancel")))));
    }
}
exports.default = DialogContainerComponent;
