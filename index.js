console.log("Hello world")
const message = document.querySelector("#message")
const deleteMovie = (event)=>{
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!"
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}

const addMovie = (event) =>{
    event.preventDefault()
    let inputField = document.querySelector("input")
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movie.addEventListener("click",crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent="X"
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    let list = document.querySelector("ul")
    list.appendChild(movie)
    inputField.value = ""
}
let form = document.querySelector("form")
form.addEventListener("submit",addMovie)