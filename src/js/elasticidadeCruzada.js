$(document).ready(function () {
	(function () {

		var module = $("#elasticidadeC");

		$('.btn', module).on('click', function () {
			//atribuindo valor as variaveis
			var demandaFinalX = $('.demFinal', module).val();
			var demandaInicialX = $('.demInicial', module).val();
			var precoFinalY = $('.preFinal', module).val();
			var precoInicialY = $('.preInicial', module).val();

			//variaveis de calculo
			var demanda = (demandaFinal - demandaInicial) / demandaInicial;
			var preco = (precoFinal - precoInicial) / precoInicial;
			var resp = demanda / preco;

			//resultado final
			$('.res', module).html(resp);
		});
	})();
});
