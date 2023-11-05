const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}


const etudiants = [
    {
        name: "Pierre",
        age: 19,
        github: "Pierrot69280",
        avatar: "avatar.png"
    },
    {
        name: "Raphaël",
        age: 18,
        github: "raphaelmoynat",
        avatar: "avatar.png"
    },
    {
        name: "Mey",
        age: 17,
        github: "MeyDetour",
        avatar: "avatar.png"
    },
    {
        name: "Natan",
        age: 19,
        github: "natanbinisti",
        avatar: "avatar.png"
    },
    {
        name: "Malakaya",
        age: 21,
        github: "MalakayaLvg",
        avatar: "avatar.png"
    },
    {
        name: "Tidiane",
        age: 24,
        github: "TidianePierreLouis",
        avatar: "avatar.png"
    }
];

const divEtudiants = document.querySelector('.etudiants');

function makeCardFromStudent(student) {
    let cardTemplate = `
<div class="card" style="width: 18rem;">
  <img src="${student.avatar}" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">${student.name}</h5>
    <p class="card-text">Âge : ${student.age}</p>
    <a href="https://github.com/${student.github}" class="btn btn-primary" target="_blank">Voir le profil GitHub</a>
  </div>
</div>
`;
    return cardTemplate;
}

etudiants.forEach((etudiant) => {
    replaceAvatar(etudiant).then((etudiant) => {
        divEtudiants.innerHTML += makeCardFromStudent(etudiant);
    });
});

async function replaceAvatar(etudiant) {
    let pseudo = etudiant.github;
    let url = `https://api.github.com/users/${pseudo}`;
    return await fetch(url)
        .then((response) => response.json())
        .then((profilGithub) => {
            etudiant.avatar = profilGithub.avatar_url;
            return etudiant;
        });
}
