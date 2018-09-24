function Mostrar()
{
//tomo la edad  

var num = parseInt(document.getElementById("edad").value);
var estado = (document.getElementById("estadoCivil").value);

	if ((num >=18)&&(estado == "Soltero"))
	{
		alert("no es menor de edad y es soltero")
	}

}//FIN DE LA FUNCIÓN