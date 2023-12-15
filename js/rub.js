//* Creamos las variables para nuestros elementos de html y utilizarlos en JS
let input = document.getElementById("input");
let inputText = document.getElementById("inputText");
let boton = document.getElementById("activar");
let text1 = "tu eres  ";
let text2 = "  a poco no?";
let textoCombinado;
//*Primero vamos a agregar el addEventListener para botoncito
boton.addEventListener("click",()=>{
    //*Combinamos los textos
    textoCombinado = text1 + input.value + text2;
    //*input.value es como tal lo que esta escrito en el input:text con el id holi
    //*.innerHTML(); lo usaremos para agregarle el texto a nuestra etiqueta p
    inputText.innerHTML = textoCombinado;
});
