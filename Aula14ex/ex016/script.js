const { createElement } = require("react");

function somar() {
  //Pega o .value de 'inicio' e converte para Number
  var inicio = Number(document.getElementById("inicio").value);
  //Pega o .value de 'fim' e converte para Number
  var fim = Number(document.getElementById("fim").value);
  //Pega o .value de 'passo' e converte para Number
  var passo = Number(document.getElementById("passo").value);
  //Sincroniza com a tag 'res' que vai receber a resposta.
  var res = document.getElementById("res");
  //Limpa a tag 'res' para poder receber o texto.
  res.innerHTML = "";

  if (passo <= 0) {
    //Mensagem de erro com aumento do valor passo
    alert("Passo ausente, vamos começar pelo passo 1");
    passo++;
  }
  if (inicio == 0 || fim == 0) {
    //Mensagem de erro sem valores no input
    alert("Impossivel calcular");
    return;
  }
  //Contagem regressiva
  if (inicio >= fim) {
    for (let c = inicio; c >= fim; c -= passo) {
      res.innerHTML += `${c} \u{1F449}`;
    }
  }
  //Contagem progressiva
  else {
    for (let a = inicio; a <= fim; a += passo) {
      res.innerHTML += `${a} \u{1F449}`;
    }
  }
  res.innerHTML += "🏁";
}

function verificar() {
  var valor = Number(document.getElementById("num").value);
  var resul = document.getElementById("resul");
  resul.innerHTML = "";
  if (isNaN(valor)) {
    alert("Por favor, insira um número!");
    return;
  }
  for (var b = 1; b <= 10; b++) {
    let mult = document.createElement("option");
    mult.text = `${valor} x ${b} = ${valor * b}`;
    resul.appendChild(mult);
  }
}
