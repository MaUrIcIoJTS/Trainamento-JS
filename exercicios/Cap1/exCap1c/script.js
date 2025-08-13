function verificar() {
  var vlproduct = Number(document.getElementById("vlproduct").value);
  var res = document.getElementById("res");
  res.innerHTML = "";
  if (vlproduct === 0) {
    res.innerHTML = "Favor, insira o valor do produto!";
  } else {
    let desc = vlproduct * 0.1;
    res.innerHTML += `Valor da conta: R$${vlproduct.toFixed(2)}<p>`;
    res.innerHTML += `Valor a vista: R$${(vlproduct - desc).toFixed(2)}<p>`;
    res.innerHTML += `Valor em 3x: R$${(vlproduct / 3).toFixed(2)}`;
  }
}
