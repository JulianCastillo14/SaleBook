export function ValidarMensaje(mensaje, color){
    let error = document.querySelector(".content-error")
    error.style.display = "flex"
    error.style.color = `${color}`
    error.innerHTML = `<p>${mensaje}</p>`
    let time = setInterval(() => {
        error.style.display = "none"
        clearInterval(time)
    }, 3000);
}