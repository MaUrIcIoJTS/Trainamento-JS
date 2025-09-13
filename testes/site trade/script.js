var button = document.getElementById("btCalcular");
button.addEventListener("click", verificar);

function verificar() {
  var inOperacao = document.getElementById("inOperacao");
  var operacao = Number(inOperacao.value);
  var inEntrada = document.getElementById("inEntrada");
  var entrada = Number(inEntrada.value);
  var inAlavancagem = document.getElementById("inAlavancagem");
  var alavancagem = Number(inAlavancagem.value);
  var inGain = document.getElementById("inGain");
  var gain = Number(inGain.value) / 100;
  var inLoss = document.getElementById("inLoss");
  var loss = Number(inLoss.value) / 100;
  var res = document.getElementById("outRes");

  var outGain = entrada * (1 + gain);
  var outLoss = entrada * (1 - loss);
  var lucro = operacao * gain * alavancagem;
  var perda = operacao * loss * alavancagem;

  if (operacao == 0 || isNaN(operacao) || entrada == 0 || isNaN(entrada)) {
    alert("Favor inserir ao menos o valor da 'operação' e da 'entrada'..");
    return;
  } else {
    var resposta = "";
    resposta =
      "StopGain: " +
      outGain.toFixed(2) +
      "\n" +
      "StopLoss: " +
      outLoss.toFixed(2) +
      "\n" +
      "Lucro: $" +
      lucro.toFixed(2) +
      "\n" +
      "Perda: $" +
      perda.toFixed(2) +
      "\n";

    res.textContent = resposta;
  }
}
