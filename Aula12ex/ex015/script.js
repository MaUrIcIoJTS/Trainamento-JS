function verificar() {
  var nasc = document.getElementById("txt1").value;
  var sex = document.getElementsByName("sex");
  var res = document.getElementById("res");
  var ano = new Date().getFullYear();
  var idade = ano - nasc;
  const imagem = document.createElement("img");
  console.log`sua idade é ${idade}`;
}
