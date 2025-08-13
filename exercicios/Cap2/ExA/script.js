var button = document.getElementById("button");
button.addEventListener("click", verificar);

function verificar() {
  var med = document.getElementById("inMed").value;
  var val = document.getElementById("inVal").value;
  var resMed = document.getElementById("outNome");
  var resVal = document.getElementById("outPreco");
  var reduz = Math.floor(val * 2);
  resMed.textContent = "";
  resVal.textContent = "";
  if (med == "" || val == 0) {
    alert("Favor insira o nome do produto e o valor.");
  } else {
    resMed.textContent = "Promoção de " + med;
    resVal.textContent = "Leve 2 por apenas: R$" + reduz.toFixed(2);
  }
}
