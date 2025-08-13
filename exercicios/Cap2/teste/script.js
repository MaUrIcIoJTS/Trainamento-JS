var verificar = document.getElementById("verificar");
verificar.addEventListener("click", infoNome);

function infoNome() {
  let inputNome = document.getElementById("name");
  let nome = inputNome.value;
  let res = document.getElementById("res");
  res.textContent = "Olá, " + nome;
}
