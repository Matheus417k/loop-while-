let saldo = 1000; 
let saque;

//apresentando as variaveis.

do {
  saque = parseFloat(prompt(`Saldo disponível: R$ ${saldo.toFixed(2)}. Digite o valor do saque:`));

//do { ... } while (saque > saldo);
//Esse bloco garante que o usuário continue digitando um valor 
//de saque válido, ou seja, menor ou igual ao saldo disponível.
 
  if (saque > saldo) {
    alert("não tem saldo o suficiente denovo.");
  }

//O do...while sempre executa pelo menos uma vez, 
//mesmo que o saldo já seja zero (poderia causar erro se não for tratado antes).

} while (saque > saldo);

//saldo -= saque;
//Quando um valor válido é digitado (menor ou igual ao saldo), ele é subtraído do saldo.
//saldo -= saque; 

alert(`saque realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`);

if (saldo <= 0) {
  alert("Saldo esgotado. Encerrando.");
}
