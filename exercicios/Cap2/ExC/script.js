var button = document.getElementById("button");
button.addEventListener("click", verificar);

function verificar() {
  let produto = document.getElementById("inProduto").value;
  let preco = document.getElementById("inPreco").value;
  let resPro = document.getElementById("resPromo");
  let resValor = document.getElementById("resVal");
  resPro.textContent = "";
  resValor.textContent = "";

  if (produto == "" || preco == 0) {
    alert("Insira todos os dados!");
  } else {
    let desconto = preco * 0.5;
    let promo = preco * 2 + desconto;

    resPro.textContent =
      produto + " - Promoção: Leve 3 por R$" + promo.toFixed(2);
    resValor.textContent =
      "O terceiro produto sai por apenas: R$" + desconto.toFixed(2);
  }
}
