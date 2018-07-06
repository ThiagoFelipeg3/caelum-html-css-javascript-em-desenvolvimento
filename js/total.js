var input_quantidade = document.querySelector("#qtd");
var output_total = document.querySelector("#total");

input_quantidade.oninput = function(){

	/*textContent serve para pegar o elemento texto*/
	var preco = document.querySelector("#preco").textContent;
	preco = preco.replace("R$",""); /*Subistitui R$ por nada*/
	preco = preco.replace(",","."); 
	preco = parseFloat(preco); /*transformando uma String em float*/

	var quantidade = $input_quantidade.value;
	var total = quantidade * preco;
	total = "R$" + total.toFixed(2) /*Adicionando duas casas decimais*/
	total = total.replace(".",",");

	output_total.value = total;
}
