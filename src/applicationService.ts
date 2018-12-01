var applicationService = {
    selectedCities: [],

    saveSelectedCities() {
        var selectedCities = JSON.stringify(this.selectedCities);
        localStorage.selectedCities = selectedCities;
    }
}