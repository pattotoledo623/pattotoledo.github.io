//Archivo js
/*document.write("<h1>Hola mundo</h1>");*/
window.onload = function(){
	document.getElementById("mensaje js").innerHTML = "Hola mundo!";
	document.getElementById("hora").innerHTML = new Date();
}


/*var minivariable = 10;
var suma =20 + minivariable;*/
//se puede declara una variable con var o let
/*
let minivariable = 10;
let suma = 20 +minivariable;

window.alert("Alerta!!! " + suma); //muestra una alerta

//window.open("https://google.com","","width=500, height=500, menubar=no");//abre una ventana emergente

function multiplica(minivariable, suma){
	let resultado = minivariable * suma;
	//document.getElementById("resultadomultiplicacion").innerHTML = resultado;
	window.alert("El resultado es: !!! " + resultado);
	document.write(minivariable + " * " + suma + " = " + resultado);
	return resultado;
}*/

//multiplica(minivariable, suma);
let a;
let b;
function raiz(a, b, c){
	let resultado = (((-1)*b)+Math.sqrt((Math.pow(b, 2) - (4*a*c))))/(2*a);
	window.alert("(-b+'/(b^2 - 4ac))/2a= "+resultado);
}