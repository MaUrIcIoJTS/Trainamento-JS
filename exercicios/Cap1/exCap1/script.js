function verificar() {
  var num = Number(document.getElementById("num").value);
  var res = document.getElementById("res");
  res.innerHTML = "";
  res.innerHTML = `Número: ${num} <p>`;
  res.innerHTML += `Vizinhos: ${num - 1} e ${num + 1}`;
}
