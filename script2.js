async function getCountryDetails() {
    const params = new URLSearchParams(window.location.search);
    const countryCode = params.get('country');

    if (!countryCode) return;

    let reply = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    let data = await reply.json();

    const country = data[0];

    document.getElementById('countryName').innerText = country.name.common;
    document.getElementById('countryFlag').src = country.flags.png;
    document.getElementById('countryCapital').innerText = country.capital ? country.capital[0] : 'N/A';
    document.getElementById('countryLanguage').innerText = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
    document.getElementById('countryCurrency').innerText = country.currencies ? Object.values(country.currencies)[0].name : 'N/A';
    document.getElementById('countryRegion').innerText = country.region || 'N/A';
    document.getElementById('countryPopulation').innerText = country.population.toLocaleString() || 'N/A';
    document.getElementById('countryArea').innerText = country.area || 'N/A';
    document.getElementById('countryMapsLink').href = `https://www.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}`;
}

window.onload = getCountryDetails;
