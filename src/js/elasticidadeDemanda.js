$(document).ready(function () {
    (function () {

    	var module = $("#elasticidadeDemanda");
    	

    	function calcularElasticidade(){

    		//atribuindo valor as variaveis
    		var demandaFinal = document.calcDemanda.demFinal.value;
      		var demandaInicial = document.calcDemanda.demInicial.value;
      		var precoFinal = document.calcDemanda.preFinal.value;
      		var precoInicial = document.calcDemanda.preInicial.value;

      		//variaveis de calculo
      		var demanda = (demandaFinal - demandaInicial)/demandaInicial;
      		var preco = (precoFinal - precoInicial)/precoInicial;
      		var resp = demanda/preco;

      		//resultado final
      		document.calcDemanda.resp.value = resp;
    	}
    })();
});
