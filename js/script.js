//* Creamos las variables para nuestros elementos de html y utilizarlos en JS
let input = document.getElementById("holi");
let resHoli = document.getElementById("resHoli");
let botoncito = document.getElementById("activar");
let texto1 = "holi - ";
let texto2 = " - careboli";
let textoCombinado;
//*Primero vamos a agregar el addEventListener para botoncito
botoncito.addEventListener("click",()=>{
    //*Combinamos los textos
    textoCombinado = texto1 + input.value + texto2;
    //*input.value es como tal lo que esta escrito en el input:text con el id holi
    //*.innerHTML(); lo usaremos para agregarle el texto a nuestra etiqueta p
    resHoli.innerHTML = textoCombinado;
});
