var button = document.getElementById("btConverter");
button.addEventListener("click", converter);

function converter() {
  let inQuilo = document.getElementById("inQuilo");
  let inConsumo = document.getElementById("inConsumo");
  let quilo = Number(inQuilo.value);
  let consumo = Number(inConsumo.value);
  let res = document.getElementById("outRes");
  let valor = (quilo / 1000) * consumo;
  res.textContent = "";
  res.textContent = "Valor a pagar: R$" + valor.toFixed(2);
}
