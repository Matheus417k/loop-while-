let soma = 0;
let quantidade = 0;   
let continuar = true;

//Declaração de variaveis, processo padrão, com LET.

while (continuar) {
  let entrada = prompt("digite uma nota (0 a 10) ou um numero negativo para sair do looping:");
  let nota = parseFloat(entrada);

  //while O comando while em programação serve para criar um laço de repetição
  
if (!isNaN(nota)) {
    if (nota < 0) {
      continuar = false;
    } else if (nota >= 0 && nota <= 10) {
      soma += nota;
      quantidade++;
    }
  }
}


//isNaN(nota) retorna true se nota não é um número ("NaN" = Not a Number), 
//então o ! (negação) garante que o código dentro só execute se nota for um número.

if (quantidade > 0) {
  let media = soma / quantidade;
  alert("Média das notas: " + media.toFixed(2));
} else {
  alert("Nenhuma nota válida foi digitada.");
}

//Verifica se pelo menos uma nota válida (entre 0 e 10) foi digitada.
//Isso garante que não ocorra uma divisão por zero ao calcular a média.

