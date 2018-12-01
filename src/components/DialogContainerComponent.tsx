import * as React from "react";
import IDialogContainer from "../interfaces/components/IDialogContainer"

export default class DialogContainerComponent extends React.Component<IDialogContainer, { selectedCity, opened }> {
        constructor(props: IDialogContainer) {
                super(props);

                this.state = {
                        selectedCity: null,
                        opened: false
                };

        }
        render() {
                return (
                        <div className="dialog-container">
                                <div className="dialog">
                                        <div className="dialog-title">Add new city</div>
                                        <div className="dialog-body">
                                                <select onChange={this.handleChange}>
                                                        <option value="2357536">Austin, TX</option>
                                                        <option value="2367105">Boston, MA</option>
                                                        <option value="2379574">Chicago, IL</option>
                                                        <option value="2459115">New York, NY</option>
                                                        <option value="2475687">Portland, OR</option>
                                                        <option value="2487956">San Francisco, CA</option>
                                                        <option value="2490383">Seattle, WA</option>
                                                </select>
                                        </div>
                                        <div className="dialog-buttons">
                                                <button id="butAddCity" onClick={() => this.addNewCity} className="button">Add</button>
                                                <button id="butAddCancel" className="button">Cancel</button>
                                        </div>
                                </div>
                        </div>
                );
        }

        handleChange(selectedElement: any) {
                this.setState({ selectedCity: selectedElement.value });
        }

        addNewCity() {
                var selectedCity = this.state.selectedCity;

                // Add the newly selected city
                applicationService.selectedCities.push({ city: selectedCity });
                applicationService.saveSelectedCities();
        }

        open() {
                this.setState({ opened: true });
        }
}