import * as React from "react";

import IOneDay from '../interfaces/components/IOneDay'


export default class OneDayComponent extends React.Component<IOneDay, {}> {

  constructor(props: IOneDay) {
    super(props);

  }

  render() {
    return (

      <div className="oneday">
        <div className="date">
          {this.props.forecast.day}
        </div>
        <div className="icon">
          {this.props.forecast.icon}
        </div>
        <div className="temp-high">
          <span className="value">
            {this.props.forecast.high}
          </span>°
          </div>
        <div className="temp-low">
          <span className="value">
            {this.props.forecast.low}
          </span>°
          </div>
      </div>




    );
  }
}