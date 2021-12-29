
var txt_lineas = document.getElementById("texto_lineas");
var btn_lineas = document.getElementById("btn_lineas");
var color_lineas = document.getElementById("color_linea");

btn_lineas.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");



function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var n_lineas = txt_lineas.value;
    const aumento = d.width/n_lineas;

    lienzo.clearRect(0, 0, d.width, d.height);

    for (var i =0; i<d.width; i = i+aumento){
    dibujarLinea(color_lineas.value, 0, i, i, d.width);
    dibujarLinea(color_lineas.value, i, 0, d.width, i);
    dibujarLinea(color_lineas.value, d.width-i, 0, 0, i);
    dibujarLinea(color_lineas.value, i, d.width, d.width, d.width-i);

    console.log(i);
    }

    
}