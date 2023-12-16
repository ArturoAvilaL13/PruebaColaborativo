
let input = document.getElementById("BlancaNavidad");
let resNavidadFamiliar = document.getElementById("resNavidadFamiliar");
let button = document.getElementById("activar");

function actualizarTexto() {
    let texto1 = "BlancaNavidad - ";
    let texto2 = " - FelicesFiestas";
    let textoCombinado = texto1 + input.value + texto2;
    resNavidadFamiliar.innerHTML = textoCombinado;
}

button.addEventListener("click", actualizarTexto);  