let saldo = 1000; 
let saque;

do {
  saque = parseFloat(prompt(`Saldo disponível: R$ ${saldo.toFixed(2)}. Digite o valor do saque:`));

  if (saque > saldo) {
    alert("Saldo insuficiente! Tente novamente.");
  }

} while (saque > saldo);

saldo -= saque; 

alert(`Saque realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`);

if (saldo <= 0) {
  alert("Saldo esgotado. Encerrando.");
}
