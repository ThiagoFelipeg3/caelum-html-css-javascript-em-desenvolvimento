var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valortamanho]'); 

/*podemos usar esta função chamando por um nome
por exemplo inputTamanho.oninput = mostrarValor
caso a function se chame mostrarValor*/
inputTamanho.oninput = function(){
	outputTamanho.value = inputTamanho.value
}