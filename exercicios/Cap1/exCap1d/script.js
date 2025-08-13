function verificar() {
  var vl1 = Number(document.getElementById("vl1").value);
  var vl2 = Number(document.getElementById("vl2").value);
  var res = document.getElementById("res");
  res.innerHTML = "";
  if (vl1 === 0 || vl2 === 0) {
    res.innerHTML = "Favor insira todos os valores!";
    return;
  } else {
    res.innerHTML += `A média dos dois valores é: ${(vl1 + vl2) / 2}`;
  }
}
