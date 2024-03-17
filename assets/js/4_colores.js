// colores inciales de las div
function pintar(color) {
  const divAzul = document.getElementById("dv1");
  divAzul.style.backgroundColor = "blue";

  const divRojo = document.getElementById("dv2");
  divRojo.style.backgroundColor = "red";

  const divVerde = document.getElementById("dv3");
  divVerde.style.backgroundColor = "green";

  const divAmarillo = document.getElementById("dv4");
  divAmarillo.style.backgroundColor = "yellow";
}

pintar("blue");
pintar("red");
pintar("green");
pintar("yellow");

//color negro
let color = "black"

const cajas = document.querySelectorAll(".caja");
cajas.forEach((caja) => {
caja.addEventListener("click", (evento) => pintarNegro(evento, color));
});

function pintarNegro(evento, color) {
const caja = evento.currentTarget;
caja.style.backgroundColor = color;
}


let color2 = "";

document.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "A") {
      color2 = "pink"
      document.getElementById('dv5').style.backgroundColor = "pink";
  } else if (e.key === "s" || e.key === "S") {
      color2 = "orange"
      document.getElementById('dv5').style.backgroundColor = "orange";
  } else if (e.key === "d" || e.key === "d") {
      color2 = "skyblue"
      document.getElementById('dv5').style.backgroundColor = "skyblue";
  } 
  
})

const changeColor = (id, newcolor) => document.querySelector("#" + id).style.backgroundColor = newcolor

document.addEventListener("click", (e) => changeColor(e.target.id, color2))

// Agregamos un evento para escuchar las teclas presionadas
document.addEventListener("keydown", function(event) {
  if (event.key === "q" || event.key === "Q") {
  agregadiv1();
  } else if (event.key === "w" || event.key === "W") {
  agregadiv2();
  } else if (event.key === "e" || event.key === "E") {
  agregadiv3();
}});

function agregadiv1() {
// Obtenemos el elemento contenedor por su ID
contenedor = document.getElementById("contenedor");
// Creamos un nuevo elemento <div>
nuevoElemento = document.createElement("div");
nuevoElemento.style.backgroundColor = 'purple';
// Asignamos un texto al nuevo elemento
nuevoElemento.textContent = "Elemento agregado";
// Agregamos el nuevo elemento al contenedor
contenedor.appendChild(nuevoElemento);
}

function agregadiv2() {
// Obtenemos el elemento contenedor por su ID
contenedor = document.getElementById("contenedor");
// Creamos un nuevo elemento <div>
nuevoElemento2 = document.createElement("div");
nuevoElemento2.style.backgroundColor = 'grey';
// Asignamos un texto al nuevo elemento
nuevoElemento2.textContent = "Elemento agregado";
// Agregamos el nuevo elemento al contenedor
contenedor.appendChild(nuevoElemento2);
}
function agregadiv3() {
// Obtenemos el elemento contenedor por su ID
contenedor = document.getElementById("contenedor");
// Creamos un nuevo elemento <div>
nuevoElemento3 = document.createElement("div");
nuevoElemento3.style.backgroundColor = 'brown';
// Asignamos un texto al nuevo elemento
nuevoElemento2.textContent = "Elemento agregado";
// Agregamos el nuevo elemento al contenedor
contenedor.appendChild(nuevoElemento3);
}
  