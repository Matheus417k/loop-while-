let primeiroNome, sobrenome;
do {
  primeiroNome = prompt("Digite o primeiro nome:");
} while (primeiroNome === "");

do {
  sobrenome = prompt("Digite o sobrenome:");
} while (sobrenome === "");

alert("Nome completo: " + primeiroNome + " " + sobrenome);


