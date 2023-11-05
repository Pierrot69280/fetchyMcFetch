const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#pokemonName").value = "Blastoise";
    getPokemon(new Event('click'));
});

document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Poids : ${data.weight} Kg</p>
        <p>Taille : ${data.height} m</p>
      </div>`;
        })
        .catch((err) => {
            document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokémon introuvable 😞</h4>
      `;
            console.log("Pokémon introuvable", err);
        });

    e.preventDefault();
}