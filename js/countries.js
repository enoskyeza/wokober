// Get references to the DOM elements
const countryInput = document.getElementById('country');
const countryList = document.getElementById('countries');
const countries =
    ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Australia", "Bangladesh", "Brazil",
        "Canada", "Chile", "China", "Colombia", "Democratic Republic of the Congo", "Egypt", "Ethiopia", "France",
        "Germany", "India", "Indonesia", "Iran", "Italy", "Japan", "Kenya", "Mexico", "Morocco", "Netherlands",
        "Nigeria", "Pakistan", "Peru", "Philippines", "Poland", "Romania", "South Africa", "Spain", "Tanzania",
        "Turkey", "Uganda", "Ukraine", "United Kingdom", "United States", "Venezuela"]

// Function to filter countries based on input
function filterCountries() {
    const searchTerm = countryInput.value.toLowerCase();
    countryList.innerHTML = ''; // Clear existing options

  // Show only the first 4 suggestions
    const filteredCountries = countries.filter(country => country.toLowerCase().includes(searchTerm)).slice(0, 4)

  filteredCountries.forEach(country => {
        if (country.toLowerCase().includes(searchTerm)) {
            const option = document.createElement('option');
            option.value = country;
            option.text = country;
            countryList.appendChild(option);
        }
    });
}

// Event listener
countryInput.addEventListener('input', filterCountries);

// Initially populate the datalist with all countries
countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.text = country;
    countryList.appendChild(option);
});
