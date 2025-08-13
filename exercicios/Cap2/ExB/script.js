var button = document.getElementById("button");
button.addEventListener("click", calcular);

function calcular() {
  let valor = document.getElementById("inValor").value;
  let uso = document.getElementById("inUso").value;
  let res = document.getElementById("inRes");
  let soma = Math.ceil(uso / 15);
  let resSoma = soma * valor;
  res.textContent = "";
  if (valor == 0 || uso == 0) {
    alert("Favor insira os valores!");
  } else {
    res.textContent = "Valor a pagar: R$" + resSoma.toFixed(2);
  }
}
