var Calculadora = {
	/* Se asignan teclas */
	EventosClick: function(){
		document.getElementById("0").addEventListener("Clic",function(){Calculadora.viewnum("0")});
		document.getElementById("1").addEventListener("Clic",function(){Calculadora.viewnum("1")});
		document.getElementById("2").addEventListener("Clic",function(){Calculadora.viewnum("2")});
		document.getElementById("3").addEventListener("Clic",function(){Calculadora.viewnum("3")});
		document.getElementById("4").addEventListener("Clic",function(){Calculadora.viewnum("4")});
		document.getElementById("5").addEventListener("Clic",function(){Calculadora.viewnum("5")});
		document.getElementById("6").addEventListener("Clic",function(){Calculadora.viewnum("6")});
		document.getElementById("7").addEventListener("Clic",function(){Calculadora.viewnum("7")});
		document.getElementById("8").addEventListener("Clic",function(){Calculadora.viewnum("8")});
		document.getElementById("9").addEventListener("Clic",function(){Calculadora.viewnum("9")});
		document.getElementById("on").addEventListener("Clic",function(){Calculadora.viewnum("")});
		document.getElementById("sign").addEventListener("Clic",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("Clic",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("Clic",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("Clic",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("Clic",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("Clic",function(){Calculadora.mas()});
		
	}
}