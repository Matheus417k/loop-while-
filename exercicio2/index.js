let soma = 0;
let quantidade = 0;
let continuar = true;

while (continuar) {
  let entrada = prompt("digite uma nota (0 a 10) ou um numero negativo para sair do looping:");
  let nota = parseFloat(entrada);

  if (!isNaN(nota)) {
    if (nota < 0) {
      continuar = false;
    } else if (nota >= 0 && nota <= 10) {
      soma += nota;
      quantidade++;
    }
  }
}

if (quantidade > 0) {
  let media = soma / quantidade;
  alert("Média das notas: " + media.toFixed(2));
} else {
  alert("Nenhuma nota válida foi digitada.");
}
