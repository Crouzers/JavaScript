function Mostrar()
{
//tomo la edad  
	var num;
	var estado;
	
	num=parseInt(document.getElementById("edad").value);

	estado=(document.getElementById("estadoCivil").value)

	if ((num<18)&&(estado=(Casado||Divorciado)))
	{
		alert("usted es muy joven para NO ser soltero")


	};
	


}//FIN DE LA FUNCIÓN