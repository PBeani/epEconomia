$(document).ready(function () {
	(function () {

		var module = $("#oferta");


		$('.btn', module).on('click', function () {
			var peso = $('.peso', module).val();
			var variante = $('.variante', module).val();
			var res = "";

			//se aumenta
			//deixei tudo separado caso queira colocar uma caixa de texto explicando porque 
			//aumentou/diminuiu ou se quiser colocar imagem do grafico

			if (peso == "aumenta") {
				if (variante == "natureza") {
					res = "A curva de oferta se desloca para direita";
				}
				if (variante == "preco") {
					res = "A curva de oferta se desloca para direita";
				}
				if (variante == "tecnologia") {
					res = "A curva de oferta se desloca para direita";
				}
				if (variante == "gorveno") {
					res = "A curva de oferta se desloca para direita";
				}
			}

			//se diminui
			else {
				if (peso == "diminui") {
					if (variante == "natureza") {
						res = "A curva de oferta se desloca para esquerda";
					}
					if (variante == "preco") {
						res = "A curva de oferta se desloca para esquerda";
					}
					if (variante == "tecnologia") {
						res = "A curva de oferta se desloca para esquerda";
					}
					if (variante == "gorveno") {
						res = "A curva de oferta se desloca para esquerda";
					}
				}
			}

			$('.res', module).html(res);
		})
	})();
});