$(document).ready(function () {
  (function () {

    var module = $("#demanda");

    $('.btn', module).on('click', function () {
      var peso = $('.peso', module).val();
      var variante = $('.variante', module).val();
      var res = "";

      //se aumenta
      //deixei tudo separado caso queira colocar uma caixa de texto explicando porque 
      //aumentou/diminuiu ou se quiser colocar imagem do grafico
      if (peso == "aumenta") {
        if (variante == "gosto") {
          var res = "A curva de demanda se desloca para direita";
        }
        if (variante == "probCompra") {
          var res = "A curva de demanda se desloca para direita";
        }
        if (variante == "receita") {
          var res = "A curva de demanda se desloca para direita";
        }
        if (variante == "precSubstitutos") {
          var res = "A curva de demanda se desloca para direita";
        }
        if (variante == "precComplementares") {
          var res = "A curva de demanda se desloca para direita";
        }
        if (variante == "expectativas") {
          var res = "A curva de demanda se desloca para direita";
        }
      }
      //diminui
      else {
        if (peso == "diminui") {
          if (variante == "gosto") {
            var res = "A curva de demanda se desloca para esquerda";
          }
          if (variante == "probCompra") {
            var res = "A curva de demanda se desloca para esquerda";
          }
          if (variante == "receita") {
            var res = "A curva de demanda se desloca para esquerda";
          }
          if (variante == "precSubstitutos") {
            var res = "A curva de demanda se desloca para esquerda";
          }
          if (variante == "precComplementares") {
            var res = "A curva de demanda se desloca para esquerda";
          }
          if (variante == "expectativas") {
            var res = "A curva de demanda se desloca para esquerda";
          }
        }
      }

      $('.res', module).html(res);
    });
  })();
});