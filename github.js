const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}


const button = document.querySelector('.button');
const contentGithub = document.querySelector('.content');

async function apiPierreGithub() {
    return await fetch("https://api.github.com/users/Pierrot69280")
        .then(reponseEnJson => reponseEnJson.json())
        .then(reponsseDeserialisee => {
            return reponsseDeserialisee;
        });
}
apiPierreGithub().then(apiElement => {
    const avatar = apiElement.avatar_url;
    const followersCount = apiElement.followers;
    const pseudo = apiElement.login;


    const content = `
          <div style=" ;text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <img style="border-radius: 5%; height: 4cm; width: 4cm" src="${avatar}" alt="Avatar"> <br>Pseudo :
            ${pseudo}
            <p>Followers : ${followersCount}</p>
          </div>
        `;


    contentGithub.innerHTML = content;
});



