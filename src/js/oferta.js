$(document).ready(function () {
    (function () {

    	var module = $("#oferta");
    	

    	function calcularOferta(){

    	//se aumenta
          //deixei tudo separado caso queira colocar uma caixa de texto explicando porque 
            //aumentou/diminuiu ou se quiser colocar imagem do grafico

    		if(peso == "aumenta"){
    			if(variante == "natureza"){
    				var res = "A curva de oferta se desloca para direita";
    			}
    			if(variante == "preco"){
    				var res = "A curva de oferta se desloca para direita";	
    			}
    			if(variante == "tecnologia"){
    				var res = "A curva de oferta se desloca para direita";
    			}
    			if(variante == "gorveno"){
    				var res = "A curva de oferta se desloca para direita";
    			}
    		}

    		//se diminui
    		else{
    			if(peso == "diminui"){
	    			if(variante == "natureza"){
	    				var res = "A curva de oferta se desloca para esquerda";
	    			}
	    			if(variante == "preco"){
	    				var res = "A curva de oferta se desloca para esquerda";	
	    			}
	    			if(variante == "tecnologia"){
	    				var res = "A curva de oferta se desloca para esquerda";
	    			}
	    			if(variante == "gorveno"){
	    				var res = "A curva de oferta se desloca para esquerda";
	    			}		
    			}
    		}

    		document.calcOferta.res.value = res;
    	}
    })();
})

<html>
<body>
<form name="calcOferta" method="post" action="">
   <fieldset>
      <legend>Calcular deslocamento curva de Oferta</legend>

      <label for="variante">Selecione a variante:</label>
      <select name="variante" id="variante">
         <option value="natureza">Condições naturais para Produção </option>
         <option value="preco">Preço dos recursos</option>
         <option value="tecnologia">Tecnologia</option>
         <option value="gorveno">Políticas Governamentais</option>
      </select>

      <label for="peso"> Selecione o peso do fator de mudança: </label>
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
