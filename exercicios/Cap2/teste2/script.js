var button = document.getElementById("btConverter");
button.addEventListener("click", converter);

function converter() {
  let titulo = document.getElementById("inTitulo").value;
  let duracao = document.getElementById("inDuracao").value;
  let outTitulo = document.getElementById("outTitulo");
  let outDuracao = document.getElementById("outDuracao");
  let horas = Math.floor(duracao / 60);
  let minutos = duracao % 60;
  outTitulo.textContent = titulo;
  outDuracao.textContent =
    "O filme tem " + horas + " hora(s) e " + minutos + " minutos(s).";
}
