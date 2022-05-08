var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(idioma) {

    if (idioma == 'es') {
        location.href = "./es/index.html"
    } else {
        location.href = "../index.html"
    }
}