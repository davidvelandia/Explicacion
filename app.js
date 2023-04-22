const TERMINOS = [
    document.querySelector(".main__algoritmo"),
    document.querySelector(".main__definir"),
    document.querySelector(".main__finAlgoritmo"),
    document.querySelector(".main__resultado"),
    document.querySelector(".main__escribir1"),
    document.querySelector(".main__escribir2"),
    document.querySelector(".main__escribir3"),
    document.querySelector(".main__leer1"),
    document.querySelector(".main__leer2")
  ];
  const CONTAINER = document.querySelector(".main__explication-container");
  const TOOLTIP = document.querySelector(".main__tool-tip");
  TERMINOS.forEach((termino, index) => {
    TERMINOS[index].addEventListener("mouseover", showTooltip);
    TERMINOS[index].addEventListener("mouseout", hideToolTip);
  });
function showTooltip(e) 
{
    let xContainer = CONTAINER.offsetLeft;
    let yContainer = CONTAINER.offsetTop;
    let x = e.pageX;
    let y = e.pageY;
    let relativex;
    let relativey;
    console.log(yContainer)
    if (e.target.classList.contains("main__algoritmo")) 
    {
      TOOLTIP.textContent = "La palabra reservada \"ALGORITMO\" indica que se está iniciando un nuevo algoritmo";
    } 
    else if(e.target.classList.contains("main__definir"))
    {
        TOOLTIP.innerHTML = `La palabra reservada \"Definir\" indica que se está declarando una o más variables (si no sabe qué es una variable, consultar el glosario de términos al final de la página).<br>
        La sintaxis (igualmente si no sabe qué es, dirigirse al glosario) es:<br> 
        1. Definir.<br>
        2. num1, num2, resultado: indican el nombre de las variables separadas por comas.<br>
        3. Como: indica qué tipo de dato tendrá la variable (para más información de qué es un tipo de dato, revisar el glosario). <br>
        4. Entero: indica que el valor recibido es de tipo número entero`;
    }
    else if(e.target.classList.contains("main__finAlgoritmo"))
    {
        TOOLTIP.textContent = "La palabra reservada \"FinAlgoritmo\" indica que se ha terminado el algoritmo";
    }
    else if(e.target.classList.contains("main__resultado"))
    {
        TOOLTIP.textContent = "La palabra reservada \"resultado\" indica que se ha creado una variable llamada resultado";
    }
    else if(e.target.classList.contains("main__escribir1") || e.target.classList.contains("main__escribir2") || e.target.classList.contains("main__escribir3"))
    {
        TOOLTIP.textContent = "la palabra reservada \"Escribir\" escribe por pantalla lo que se le indique (como las instrucciones)"
    }
    else if (e.target.classList.contains("main__leer1") || e.target.classList.contains("main__leer2"))
    {
        TOOLTIP.textContent = "la palabra reservada \"Leer\" permite al usuario ingresar texto por teclado, en este caso almacenamos ese texto en una variable, esa sería nuestra entrada"
    }
    relativex = (x-xContainer);
    relativey = (y-yContainer-650)
    TOOLTIP.style.top = relativey + "px";
    TOOLTIP.style.left = relativex + "px";
    TOOLTIP.style.visibility = "visible";
}
  
  
  function hideToolTip(e) {
    TOOLTIP.style.visibility = "hidden";
    TOOLTIP.style.left = 0 + "px";
    TOOLTIP.style.top = 0 + "px";
    TOOLTIP.textContent = " ";
  }
