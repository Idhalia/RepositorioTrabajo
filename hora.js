var botonHora=document.querySelector(".ver-hora");

var etiquetaHora=document.querySelector(".hora-actual");


function mostrarHora ()
{
	var tiempo=new Date();
	var horas=tiempo.getHours(),
	    minutos=tiempo.getMinutes(),
	    segundos=tiempo.getSeconds();

	if(horas<=9)
	{
		horas="0"+horas;
	}
	if(minutos<=9)
	{
		minutos="0"+minutos;
	}
	if(segundos<=9)
	{
		segundos="0"+segundos;
	}

	if(horas>=00 && horas<06)
	{
		alert("Es de Madrugada");
	}
	else if(horas>=06 && horas<12)
	{
		alert("Buenos días");
	}
	else if(horas>=12 && horas<18)
	{
		alert("Buenas tardes");
	}
	else if(horas=>18 && horas<00)
	{
		alert("Buenas noches");
	}
	else
	{
		console.log(tiempo);
		alert("ningún tiempo");
	}

	etiquetaHora.innerHTML= horas + ":" + minutos + ":" + segundos;
}

botonHora.addEventListener("click",mostrarHora);