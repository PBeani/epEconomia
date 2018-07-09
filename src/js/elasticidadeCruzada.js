$(document).ready(function () {
    (function () {

    	var module = $("#elasticidadeCruzada");
    	

    	function calcularElasticidade(){

    		//atribuindo valor as variaveis
    		var demandaFinalX = document.calcCruzada.demFinal.value;
      		var demandaInicialX = document.calcCruzada.demInicial.value;
      		var precoFinalY = document.calcCruzada.preFinal.value;
      		var precoInicialY = document.calcCruzada.preInicial.value;

      		//variaveis de calculo
      		var demanda = (demandaFinal - demandaInicial)/demandaInicial;
      		var preco = (precoFinal - precoInicial)/precoInicial;
      		var resp = demanda/preco;

      		//resultado final
      		document.calcCruzada.resp.value = resp;
    	}
    })();
})

<html>
<body>
<form name="calcCruzada" method="post" action="">
   <fieldset>
      <legend> Calcular Elasticidade Cruzada </legend> 



      <label for= "demFinal">Digite o valor da demanda final produto X <strong>1</strong>:</label>
      <input type="text" name="demFinal" id="demFinal" />

      <label for="demInicial">Digite o valor da demanda inicial produto X<strong>2</strong>:</label>
      <input type="text" name="demInicial" id="demInicial" />

      <label for= "preFinal">Digite o valor preço final produto Y <strong>3</strong>:</label>
      <input type="text" name="preFinal" id="preFinal" />

      <label for="preInicial">Digite o valor preço inicial produto Y <strong>4</strong>:</label>
      <input type="text" name="preInicial" id="preInicial" />

      <input type="button" value="Calcular" class="botao" onClick="calcular(document.calcDemanda.oper.value)"/>


   </fieldset>
</form>

</body>
</html>
