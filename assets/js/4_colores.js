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

// evento a color negro
const color = "black"

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
    // Comprobamos si la tecla presionada es "A" o "a"
    if (event.key === "q" || event.key === "Q") {
    // Si es "A" o "a", llamamos a la función agregarElementoa
    agregadiv('purple');
    } else if (event.key === "w" || event.key === "W") {
    // Si es "D" o "d", llamamos a la función eliminarElemento
    agregadiv('gray');
    } else if (event.key === "e" || event.key === "E") {
        // Si es "D" o "d", llamamos a la función eliminarElemento
    agregadiv('brown');
}});

function agregadiv(color) {
    const agregadiv = document.createElement("div");
    agregadiv.style.width = "200px";
    agregadiv.style.height = "200px";
    agregadiv.style.backgroundColor = color;
  
    document.body.appendChild(agregadiv);
  }

  