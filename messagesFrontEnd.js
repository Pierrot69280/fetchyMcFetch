// Nav burger :

const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}


// ---------------------- //


const content = document.querySelector('.content')
let token = null

function run() {
    if (!token) {
        renderLoginForm()
    } else {
        fetchMessages().then(messages => {
            renderMessages(messages)
        })

    }
}

run()

function renderLoginForm() {
    let loginTemplate =

        `<div class="login form-control">
                            <h2>Login</h2>
                            <input type="text" id="username" class="form-control mt-3" placeholder="username">
                            <input type="password" name="" id="password" class="form-control mt-3" placeholder="password">
                           
                            <button class="btn mt-3 boutonLogin" id="loginButton">Log in</button>
                           
                        </div>`
    render(loginTemplate)
    const loginButton = document.querySelector('#loginButton')
    loginButton.addEventListener('click', () => {
        login()
    })
}


function login() {
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')

    let body = {
        username: username.value,
        password: password.value
    }

    let params = {
        headers: {"Content-type": "application/json"},
        method: "POST",
        body: JSON.stringify(body)

    }

    fetch('https://b1messenger.imatrythis.tk/login', params)
        .then(response => response.json())
        .then(data => {
            if (data.message == "Invalid credentials.") {
                renderLoginForm()
            } else {
                token = data.token
                run()
            }

        })
}

function generateMessage(message) {
    let messageTemplate = `    <div class="row text-light">
                                <hr>
                                    <p><strong>${message.author.username} :</strong> ${message.content}  </p>
                                <hr>
                            </div>`

    return messageTemplate
}


// --------------------SEND MESSAGE -------------- //
function renderMessageForm() {
    let messageTemplate =
        `<div class="form-message">
    <input type="text" id="message" class="form-message" placeholder="Message...">
    <button class="btn mt-3 boutonSend" id="sendButton">Envoyer</button>

</div>`
    render(messageTemplate)
    const sendButton = document.querySelector('#sendButton')

}

// --------------------SEND MESSAGE -------------- //


function renderMessages(tableauMessages) {
    let contentMessages = ""
    tableauMessages.forEach(message => {
        contentMessages += generateMessage(message)
    })
    render(contentMessages)
}

function render(pageContent) {
    content.innerHTML = ""
    content.innerHTML = pageContent
};

async function fetchMessages() {
    let params = {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method: "GET",
    }
    return await fetch('https://b1messenger.imatrythis.tk/api/messages', params)
        .then(response => response.json())
        .then(data => {
            if (data.message == "Invalid credentials.") {
                renderLoginForm()
            } else {
                return data
            }
        })
}

run()









