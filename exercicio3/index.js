let total = 0;
let continuar = true;

while (continuar) {
  let entrada = prompt("Digite o valor da compra (ou 0 para finalizar):");
  let valor = parseFloat(entrada);

  if (!isNaN(valor)) {
    if (valor === 0) {
      continuar = false;
    } else if (valor > 0) {
      total += valor;
    }
  }
}

alert("Total da compra: R$ " + total.toFixed(2));
