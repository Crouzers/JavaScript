function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	var numeroValidado = document.getElementById("Numero").value;
	while(!(numero<=9&&numero>=0))
	{
		numero = prompt("ingrese numero entre 0 y 9");

	}

	document.getElementById("Numero").value =  numero;

}//FIN DE LA FUNCIÓN