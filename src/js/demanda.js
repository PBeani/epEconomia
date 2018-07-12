$(document).ready(function () {
    (function () {

    	var module = $("#demanda");
    	

    	function calcularDemanda(){

    		//se aumenta
          //deixei tudo separado caso queira colocar uma caixa de texto explicando porque 
            //aumentou/diminuiu ou se quiser colocar imagem do grafico
        if (peso == "aumenta"){
          if(variante == "gosto"){
            var res = "A curva de demanda se desloca para direita";
          }
          if(variante == "probCompra"){
            var res = "A curva de demanda se desloca para direita";
          }
          if(variante == "receita"){
           var res = "A curva de demanda se desloca para direita";
          }
          if(variante == "precSubstitutos"){
            var res = "A curva de demanda se desloca para direita";
          }
          if(variante == "precComplementares"){
            var res = "A curva de demanda se desloca para direita";
          }
          if(variante == "expectativas"){
            var res = "A curva de demanda se desloca para direita";
          }
        }
        //diminui
        else{
          if(peso == "diminui"){
            if(variante == "gosto"){
              var res = "A curva de demanda se desloca para esquerda";
            }
            if(variante == "probCompra"){
              var res = "A curva de demanda se desloca para esquerda";
            }
            if(variante == "receita"){
             var res = "A curva de demanda se desloca para esquerda";
            }
            if(variante == "precSubstitutos"){
              var res = "A curva de demanda se desloca para esquerda";
            }
            if(variante == "precComplementares"){
              var res = "A curva de demanda se desloca para esquerda";
            }
            if(variante == "expectativas"){
              var res = "A curva de demanda se desloca para esquerda";
            } 
          }
        }

        document.calcDemanda.res.value = res;
    	}
    })();
})

<html>
<body>
<form name="calcDemanda" method="post" action="">
   <fieldset>
      <legend> Calcular deslocamento curva de Demanda</legend>

      <label for="variante">Selecione a variante:</label>
      <select name="variante" id="variante">
         <option value="gosto">Gosto ou preferência da População </option>
         <option value="probCompra">Probabilidade de Compra da População</option>
         <option value="receita">Receita</option>
         <option value="precSubstitutos">Preço dos produtos Substitutos</option>
         <option value="precComplementares"> Preço dos produtos Complementares </option>
         <option value="expectativas"> Expectativas futuras </option>
      </select>

      <label for="peso"> Selecione o peso da mudança: </label>
      <select name= "peso" id="peso">
          <option value="aumenta"> Aumenta </option>
          <option value="diminui"> Diminui </option>
      </select>

      <label for="res">Resultado:</label>
      <input type="text" name="res" id="res" />

      <input type="button" value="Calcular" class="botao" onClick="calcular(document.calcform.oper.value)"/>
   </fieldset>
</form>
</body>
</html>