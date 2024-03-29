const boutonHamburger = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

boutonHamburger.addEventListener("click", basculerNavigation);

function basculerNavigation() {
    boutonHamburger.classList.toggle("active");
    navigation.classList.toggle("active");
}

const boutonChercher = document.querySelector("#search-btn");
const champChercher = document.querySelector("#search-input");
const emplacement = document.querySelector("#location");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const imageMeteo = document.querySelector("#weather-image");

boutonChercher.addEventListener("click", () => {
    const ville = champChercher.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&appid=cf0c23c245d9367cdb2aa46409f31710`)
        .then((reponse) => reponse.json())
        .then((donnees) => {
            emplacement.textContent = donnees.name;
            const temperatureKelvin = donnees.main.temp;
            const temperatureCelsius = temperatureKelvin - 273.15;
            const temperatureEnFrancais = convertirEnFrancais(temperatureCelsius);
            temperature.textContent = `Température : ${temperatureEnFrancais} °C`;
            description.textContent = `Description : ${donnees.weather[0].description}`;


            mettreAJourImageMeteo(donnees.weather[0].main);
        });
});

function convertirEnFrancais(temperatureCelsius) {
    return temperatureCelsius.toFixed(1);
}


function mettreAJourImageMeteo(conditionMeteo) {
    const cheminImage = determineCheminImage(conditionMeteo);
    imageMeteo.src = cheminImage;
}


function determineCheminImage(conditionMeteo) {
    switch (conditionMeteo) {
        case "Clear":
            return "ciel.jpg";
        case "Clouds":
            return "nuages.jpg";
        case "Rain":
            return "pluie.png";
        case "Snow":
            return "neige.jpg";
        case "Hail":
            return "grele.jpg";
    }
}


