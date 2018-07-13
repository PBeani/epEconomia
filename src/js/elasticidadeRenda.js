$(document).ready(function () {
	(function () {

		var module = $("#elasticidadeR");

		$('.btn', module).on('click', function () {
			debugger;
			//atribuindo valor as variaveis
			var demandaFinal = $('.demFinal', module).val();
			var demandaInicial = $('.demInicial', module).val();
			var rendaFinal = $('.renFinal', module).val();
			var rendaInicial = $('.renInicial', module).val();

			//variaveis de calculo
			var demanda = (demandaFinal - demandaInicial) / demandaInicial;
			var renda = (rendaFinal - rendaInicial) / rendaInicial;

			if(renda === 0) {
				renda = 1;
			}
			
			var resp = demanda / renda;

			//resultado final
			$('.res', module).html(resp);
		});
	})();
});

