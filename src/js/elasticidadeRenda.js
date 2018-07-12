$(document).ready(function () {
    (function () {

    	var module = $("#elasticidadeRenda");
    	

    	function calcularElasticidade(){

    		//atribuindo valor as variaveis
    		var demandaFinal = document.calcRenda.demFinal.value;
      		var demandaInicial = document.calcRenda.demInicial.value;
      		var rendaFinal = document.calcRenda.renFinal.value;
      		var rendaInicial = document.calcRenda.renInicial.value;

      		//variaveis de calculo
      		var demanda = (demandaFinal - demandaInicial)/demandaInicial;
      		var renda = (rendaFinal - rendaInicial)/rendaInicial;
      		var resp = demanda/renda;

      		//resultado final
      		document.calcRenda.resp.value = resp;
    	}
    })();
})

<html>
<body>
<form name="calcRenda" method="post" action="">
   <fieldset>
      <legend> Calcular Elasticidade por Renda </legend> 



      <label for= "demFinal">Digite o valor da demanda final <strong>1</strong>:</label>
      <input type="text" name="demFinal" id="demFinal" />

      <label for="demInicial">Digite o valor da demanda inicial <strong>2</strong>:</label>
      <input type="text" name="demInicial" id="demInicial" />

      <label for= "renFinal">Digite o valor da renda final <strong>3</strong>:</label>
      <input type="text" name="renFinal" id="renFinal" />

      <label for="renInicial">Digite o valor da renda inicial <strong>4</strong>:</label>
      <input type="text" name="renInicial" id="renInicial" />

      <label for="resp">Resultado:</label>
      <input type="text" name="resp" id="resp" />

      <input type="button" value="Calcular" class="botao" onClick="calcular(document.calcDemanda.oper.value)"/>


   </fieldset>
</form>

</body>
</html>

