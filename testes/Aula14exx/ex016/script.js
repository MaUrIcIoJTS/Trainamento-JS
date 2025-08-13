const { createElement } = require("react");

function somar() {
  var inicio = Number(document.getElementById("inicio").value);
  var fim = Number(document.getElementById("fim").value);
  var passo = Number(document.getElementById("passo").value);
  var res = document.getElementById("res");
  console.log(`${inicio}, ${fim}, ${passo}`);
  res.innerHTML = "";
  //Corrigindo o passo para ser pelo menos 1
  if (passo <= 0) {
    alert("Passo ausente, vamos começar pelo passo 1");
    passo++;
  }
  //Emite um alerta se o inicio ou o fim nao forem preenchidos
  if (inicio === 0 && fim === 0) {
    res.innerHTML = "O número de inicio não pode ser igual a zero!";
    return;
  }
  res.innerHTML = "Contando: <br>";
  //Contagem regressiva
  if (inicio > fim) {
    for (var i = inicio; i >= fim; i -= passo) {
      res.innerHTML += `${i} 👉`;
    }
  }
  //contagem progressiva
  else {
    for (var a = inicio; a <= fim; a += passo) {
      res.innerHTML += `${a} 👉`;
    }
  }
  res.innerHTML += "🏁";
}

function verificar() {
  var valor = document.getElementById("num").value;
  var resul = document.getElementById("resul");
  resul.innerHTML = "";
  if (valor.length === 0 || isNaN(valor)) {
    alert("Por favor, insira um número!");
    return;
  }
  for (var b = 1; b <= 10; b++) {
    let mult = document.createElement("option");
    mult.value = `tab${b}`;
    mult.text = `${valor} x ${b} = ${valor * b}`;
    resul.appendChild(mult);
  }
}
