function calcular() {
  var vlconta = Number(document.getElementById("vlconta").value);
  var pessoas = Number(document.getElementById("pessoas").value);
  var res = document.getElementById("res");
  res.innerHTML = "";
  if (vlconta === 0 || pessoas == 0) {
    res.innerHTML = "Favor insira todos os valores!";
    return;
  } else {
    res.innerHTML += `O valor de R$${vlconta.toFixed(
      2
    )} divido por ${pessoas} pessoas é de: <br> R$${(vlconta / pessoas).toFixed(
      2
    )}.`;
  }
}
