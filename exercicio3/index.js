let total = 0;
let continuar = true;

// declaração padrão de variavel como nos codigos 1 e 2

while (continuar) {
  let entrada = prompt("Digite o valor da compra (ou 0 para finalizar):");
  let valor = parseFloat(entrada);


//Inicia um laço que só para quando a variável continuar for falsa.
//Presume-se que continuar foi definida anteriormente como true.
//Isso cria um loop que continuará solicitando valores do usuário.

if (!isNaN(valor)) {
    if (valor === 0) {
      continuar = false;
    } else if (valor > 0) {
      total += valor;
    }
  }
}

//if (valor === 0)
//Se o valor for exatamente 0, o usuário quer finalizar o processo.
//A variável continuar é definida como false, encerrando o loop while.



alert("Total da compra: R$ " + total.toFixed(2));
