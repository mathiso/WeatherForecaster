import * as React from "react";
import HeaderComponent from './HeaderComponent';
import DialogContainerComponent from './DialogContainerComponent';

import WeatherListComponent from "./WeatherListComponent";
import LoaderComponent from "./LoaderComponent";

export default class MainComponent extends React.Component<{}> {

        render() {
                return (
                        <div>
                                <HeaderComponent />
                                <main className="main">
                                        <WeatherListComponent searchTerm="trekanten" searchDate={new Date()} />
                                </main>

                                <DialogContainerComponent />
                                <LoaderComponent />
                        </div>
                );
        }

        openDialogCallback(){
                
        }
}