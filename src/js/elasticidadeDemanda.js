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
})

<html>
<body>
<form name="calcDemanda" method="post" action="">
   <fieldset>
      <legend> Calcular Elasticidade por Preço Demanda </legend> 



      <label for= "demFinal">Digite o valor da demanda final <strong>1</strong>:</label>
      <input type="text" name="demFinal" id="demFinal" />

      <label for="demInicial">Digite o valor da demanda inicial <strong>2</strong>:</label>
      <input type="text" name="demInicial" id="demInicial" />

      <label for= "preFinal">Digite o valor preço final <strong>3</strong>:</label>
      <input type="text" name="preFinal" id="preFinal" />

      <label for="preInicial">Digite o valor preço inicial <strong>4</strong>:</label>
      <input type="text" name="preInicial" id="preInicial" />

      <label for="resp">Resultado:</label>
      <input type="text" name="resp" id="resp" />

      <input type="button" value="Calcular" class="botao" onClick="calcular(document.calcDemanda.oper.value)"/>


   </fieldset>
</form>

</body>
</html>

