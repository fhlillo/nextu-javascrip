var Calculadora = {
	/* Declaración de variable*/
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	inicio: (
		function(){
			this.EventosClick();
		}
	),
	
	/* Se asignan teclas */
	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.viewnum("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.viewnum("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.viewnum("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.viewnum("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.viewnum("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.viewnum("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.viewnum("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.viewnum("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.viewnum("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.viewnum("9")});
		document.getElementById("on").addEventListener("click",function(){Calculadora.viewnum("")});
		document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
		
	},
	/* función vision de calculadora*/
	viewnum: function(valor){
		if(this.pantalla.length < 8){
			if(this.pantalla != "0"){
				this.pantalla += valor;
			}else if(valor != 0){
				this.pantalla = "",
				this.pantalla += valor;
			}
			this.viewdisplay();
		}
	},
	sign: function(){
		this.pantalla = 
	}
	/*imprime en pantalla*/
	viewdisplay: function(){
		document.getElementById("display").innerHTML = this.pantalla;
	}
}
Calculadora.inicio();
