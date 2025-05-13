let primeiroNome, sobrenome;

// dessa vez mudei um pouco apresentando as variaveis de uma vez apenas. 

do {
  primeiroNome = prompt("Digite o primeiro nome:");
} while (primeiroNome === "");


do {
  sobrenome = prompt("Digite o sobrenome:");
} while (sobrenome === "");

alert("Nome completo: " + primeiroNome + " " + sobrenome);


//do { ... } while (...)
//O do...while executa o bloco pelo menos uma vez, e repete enquanto a condição for verdadeira.
//Ideal para quando você quer forçar a entrada do usuário antes de verificar se ela é válida.