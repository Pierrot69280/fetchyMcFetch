const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}

const button = document.querySelector('.button');
const contentGithub = document.querySelector('.content');

async function apiPierreGithub() {
    return await fetch("https://api.github.com/users/Pierrot69280")
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

apiPierreGithub().then(apiElement => {
    const avatar = apiElement.avatar_url;
    const followersCount = apiElement.followers;
    const pseudo = apiElement.login;
    const githubProfileUrl = apiElement.html_url; // GitHub profile URL

    const content = `
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <a href="${githubProfileUrl}" target="_blank"> <!-- Link to your GitHub profile -->
        <img style="border-radius: 5%; height: 4cm; width: 4cm" src="${avatar}" alt="Avatar">
      </a>
<<<<<<<<< Temporary merge branch 1
      <br>Pseudo: ${pseudo}
      <p>Followers: ${followersCount}
=========
      <br>${pseudo}
      <p>Followers : ${followersCount}
>>>>>>>>> Temporary merge branch 2
    </div>
  `;

    contentGithub.innerHTML = content;
});

const showReposButton = document.getElementById('showReposButton');
const reposList = document.getElementById('reposList');

// Fonction pour récupérer et afficher vos dépôts GitHub
async function afficherDepotsGitHub() {
    try {
        const response = await fetch("https://api.github.com/users/Pierrot69280/repos");
        const repos = await response.json();

<<<<<<<<< Temporary merge branch 1
=========
async function afficherDepotsGitHub() {
    try {
        const response = await fetch("https://api.github.com/users/Pierrot69280/repos");
        const repos = await response.json();

>>>>>>>>> Temporary merge branch 2
        const listeDepotsHTML = repos.map(repo => {
            return `
        <div class="text-center">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <p>${repo.description || 'Aucune description'}</p>
        </div>
      `;
        }).join('');

        reposList.innerHTML = listeDepotsHTML;
    } catch (error) {
        console.error("Erreur lors de la récupération des dépôts GitHub :", error);
        reposList.innerHTML = "Impossible de récupérer les dépôts.";
    }
}

showReposButton.addEventListener('click', afficherDepotsGitHub);