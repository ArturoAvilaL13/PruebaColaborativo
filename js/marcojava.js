let input = document.getElementById("saludo");

let par = document.getElementById("par");

let boton = document.getElementById("set");

let texto1 = "Wenas tardes ";


let texto2 = "¿Cómo estás? ";
let finalText;

boton.addEventListener("click",()=>{
    
finalText = texto1 + input.value + texto2;
    
 par.innerHTML = finalText;
});
