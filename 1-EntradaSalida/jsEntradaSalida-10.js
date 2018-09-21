/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var num1;

	num1 = parseInt(document.getElementById("importe").value);

	document.getElementById("resultado").value = num1*0.75;
}
