function Mostrar()
{
//tomo la edad  
	var num = parseInt(document.getElementById("edad").value);

	if(num>=18)
		{
			alert("usted es mayor de edad");

	
		}

	
	if(num<=12) 
		{
			alert("usted es un niño")
		}

	if((num>=13)&&(num<=17))
		{
			alert("usted es adolescente")
		}



}//FIN DE LA FUNCIÓN