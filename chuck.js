const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}


const boutonChuck = document.querySelector('.boutonChuck')
const texteBlague = document.querySelector('.chuck')

async function vaChercherUneBlagueSurChuckNorris()
{
    return await fetch("https://api.chucknorris.io/jokes/random")
        .then(response=>response.json())
        .then(data=>{
            return data
        })
}

boutonChuck.addEventListener("click",()=>{
    vaChercherUneBlagueSurChuckNorris().then(data=> {
        console.log(data.value)
        let template = `<h3>${data.value}</h3>`
        texteBlague.innerHTML += template;
    })
})

fetch("https://api.github.com/users/natanbinisti")
    .then(response=>response.json())
    .then(data=>{
        document.querySelector('.natan').src = data.avatar_url
    })

const divButtons = document.querySelector('.boutonsCategories')

fetch("https://api.chucknorris.io/jokes/categories")
    .then(response=>response.json())
    .then(data=> {

        data.forEach((category)=>{
            console.log(category)
            let templateButton = `
        <button class="btn btn-primary boutonCategorie" id="${category}">${category}</button>
        `

            divButtons.innerHTML += templateButton



        })

        let boutons = document.querySelectorAll('.boutonCategorie')

        boutons.forEach((bouton)=>{

            bouton.addEventListener("click", ()=>{

                fetch(`https://api.chucknorris.io/jokes/random?category=${bouton.id}`)
                    .then(response=>response.json())
                    .then(data =>{
                        let template = `<h3>${data.value}</h3>`
                        texteBlague.innerHTML += template;
                    })

            })

        })

    })

const boutonReset = document.querySelector('.boutonReset');

boutonReset.addEventListener("click", () => {
    texteBlague.innerHTML = ""; // Efface le contenu de texteBlague
});
