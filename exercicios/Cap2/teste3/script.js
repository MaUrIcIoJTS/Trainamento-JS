var button = document.getElementById("btConverter");
button.addEventListener("click", converter);

function converter() {
  let inVeiculo = document.getElementById("inVeiculo");
  let inValor = document.getElementById("inValor");
  let veiculo = inVeiculo.value;
  let valor = inValor.value;
  let nomeVeiculo = document.getElementById("outVeiculo");
  let resValor = document.getElementById("outValor");
  let resParcela = document.getElementById("outParcela");
  let entrada = valor * 0.5;
  let parcelas = Math.ceil(entrada / 12);
  resValor.textContent = "";
  resParcela.textContent = "";
  nomeVeiculo.textContent = "";
  nomeVeiculo.textContent = "Promoção: " + veiculo;
  resValor.textContent = "Entrada de: R$" + entrada.toFixed(2);
  resParcela.textContent = "12x de: R$" + parcelas.toFixed(2);
}
