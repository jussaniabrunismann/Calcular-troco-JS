let pagamento = parseInt(prompt("Quanto de dinheiro recebi?"));
let valorDoProduto = parseInt(prompt("Qual o valor produto"));

let troco = pagamento - valorDoProduto;

let recebiCalote = pagamento < valorDoProduto;

if(recebiCalote == true) {
  alert("Vou chamar a Polícia!");
} else {
  alert("Seu troco é de " + troco + " reais.");
}








