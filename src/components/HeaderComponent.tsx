import * as React from "react";

export default class HeaderComponent extends React.Component<{}> {

        render() {
                return (
                        <header className="header">
                                <h1 className="header__title">Weather PWA</h1>
                                <button id="butRefresh" className="headerButton" aria-label="Refresh"></button>
                                <button id="butAdd" className="headerButton" aria-label="Add"></button>
                        </header>
                );
        }
}