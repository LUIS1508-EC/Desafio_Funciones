/*=======================================================================
  ======================== FUNCION PINTAR.HTML ==========================
  =======================================================================*/

const pintar = (element,color) => element.style.backgroundColor = color;
element = document.getElementById("ele1");
element.style.backgroundColor = 'green';
element.addEventListener("click", function(){pintar(element,'yellow')});


/*=======================================================================
  ======================== FUNCION 4_COLORES.HTML =======================
  =======================================================================*/

  document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
    }
    })