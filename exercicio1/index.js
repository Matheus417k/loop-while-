let numero = prompt ("Digite um numero positivo:");
//1° parte do codigo estamos apresentando numro ao PC, consequentemente este codigo
// como um todo pedira para você caro usuario para digitar um numero (possitivo)

while (numero === numero<0 || isNaN(numero) || (numero) < 0) {
  numero = prompt("numero invalido. Por favor digite um numero possitivo:");
}

//O comando while em programação serve para criar um laço de repetição, 
//que executa um bloco de código repetidamente enquanto 
//uma condição for verdadeira. A condição é verificada antes 
//de cada execução do bloco de código. 

alert("numero valido: " + numero);