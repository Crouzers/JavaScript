function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
switch(laHora)
{
	case"7":
	case"8":
	case"9":
	case"10":
	case"11":
		alert("es temprano");
			break;
	default:
		alert("no es temprano");

		break;

}
	



}//FIN DE LA FUNCIÓN