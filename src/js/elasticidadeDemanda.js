$(document).ready(function () {
    (function () {

    	var module = $("#elasticidadeDemanda");
    	

    	$('.btn', module).on('click', function () {

    		//atribuindo valor as variaveis
    		var demandaFinal = $('.demFinal', module).val();
        var demandaInicial = $('.demInicial', module).val();

      		var precoFinal = $('.precoFinal', module).val();e;
      		var precoInicial = $('.precoInicial', module).val();

      		//variaveis de calculo
      		var demanda = (demandaFinal - demandaInicial)/demandaInicial;
      		var preco = (precoFinal - precoInicial)/precoInicial;
      		var resp = demanda/preco;

      		//resultado final
      		$('.res', module).html(resp);
    	}
    })();
});
