const contenido = document.getElementById("contenido");

let nombre = "ana pp";
let nofb = 5;

let whob = [4, 5, 6, 10, 50, 3];

venTaja(`<h2>nombre</h2>`);

for(let i = 0; i < whob.length; i++){
    venTaja(`<h3>Who's got ${whob[i]} b's</h3>`);
}

function venTaja(nuevoContenido){
    contenido.innerHTML += nuevoContenido;
}