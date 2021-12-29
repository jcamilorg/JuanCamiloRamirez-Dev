
var txt_lineas = document.getElementById("texto_lineas");
var btn_lineas = document.getElementById("btn_lineas");
var color_lineas = document.getElementById("color_linea");
var d = document.getElementById("dibujito");
var lienzo1 = d.getContext("2d");

var dibujo2 = document.getElementById("area_dibujo_flechas");
var lienzo2 = dibujo2.getContext("2d");

var x = dibujo2.width/2+1; // Variable actual de punto en x
var y = dibujo2.width/2+1; // Variable actual de punto en y
var dibujar = false;

btn_lineas.addEventListener("click", dibujoPorClick);

document.addEventListener("keydown",dibujarTeclado);

dibujo2.addEventListener("mousedown", iniciarDibujo);
dibujo2.addEventListener("mouseup", terminarDibujo);
dibujo2.addEventListener("mousemove", dibujarMouse);


var teclas = {UP:87,DOWN:83,LEFT:65,RIGHT:68};


dibujarLinea("blue",dibujo2.width/2-1,dibujo2.width/2-1,dibujo2.width/2+1,dibujo2.width/2+1,lienzo2);

function dibujarLinea(color, xi, yi, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1; // unidades en px
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var n_lineas = txt_lineas.value;
    const aumento = d.width/n_lineas;

    lienzo1.clearRect(0, 0, d.width, d.height);

    for (var i =0; i<d.width; i = i+aumento){
    dibujarLinea(color_lineas.value, 0, i, i, d.width, lienzo1);
    dibujarLinea(color_lineas.value, i, 0, d.width, i, lienzo1);
    dibujarLinea(color_lineas.value, d.width-i, 0, 0, i, lienzo1);
    dibujarLinea(color_lineas.value, i, d.width, d.width, d.width-i, lienzo1);

    console.log(i);
    }

    
}

function dibujarTeclado(evento)
{
    var color = "blue";
    var movimento = 10
    switch(evento.keyCode)
    {
        case teclas.UP: 
            dibujarLinea(color,x,y,x,y-movimento, lienzo2);
            y = y-movimento;
        break;
        case teclas.DOWN: 
            dibujarLinea(color,x,y,x,y+movimento, lienzo2);
            y = y+movimento;
        break;
        case teclas.LEFT: 
            dibujarLinea(color,x,y,x-movimento,y, lienzo2);
            x = x-movimento;
        break;
        case teclas.RIGHT: 
            dibujarLinea(color,x,y,x+movimento,y, lienzo2);
            x = x+movimento;
        break;
        default: 
            dibujarLinea(color,x,y,x,y-movimento, lienzo2);
            console.log(evento)
        break;
    }
}

function iniciarDibujo(evento) 
{
    x=evento.offsetX;
    y=evento.offsetY;
    dibujar=true;
}

function terminarDibujo(){
    dibujar=false;
}

function dibujarMouse(evento)
{
    color="black";
    if (dibujar==true){
        dibujarLinea(color, x, y, evento.offsetX, evento.offsetY, lienzo2); 
        x=evento.offsetX;
        y=evento.offsetY;
    }
}
function info(evento)
{
    console.log(evento);
}