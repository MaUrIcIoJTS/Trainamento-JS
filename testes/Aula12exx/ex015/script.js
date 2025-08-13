/*function verificar() {
  var ano = document.getElementById("txtano").value;
  var res = document.getElementById("res");
  var idade = new Date().getFullYear() - ano;
  if (ano.length == 0 || isNaN(ano)) {
    alert("Por favor, digite um ano de nascimento válido.");
  } else {
    var sexo = document.querySelector('input[name="radsex"]:checked').id;
    res.innerHTML = `Você é ${sexo} e tem ${idade} anos.`;
  }
}*/

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano").value;
  var res = document.getElementById("res");
  if (fano.length == 0 || Number(fano) > ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano);
    var genero = "";
    var img = document.createElement("img");

    img.setAttribute("id", "foto");
    img.style.width = "190px";
    img.style.height = "190px";
    img.style.borderRadius = "50%";
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "homembebe.jpg");
        document.body.style.background = "#a99affff";
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "homemjovem.jpg");
        document.body.style.background = "#7765ddff";
      } else if (idade >= 21 && idade < 50) {
        //adulto
        img.setAttribute("src", "homem.jpg");
        document.body.style.background = "#321abdff";
      } else {
        //idoso
        img.setAttribute("src", "homemidoso.jpg");
        document.body.style.background = "#221281ff";
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "mulherbebe.jpg");
        document.body.style.background = "#ee6e6eff";
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "mulherjovem.jpg");
        document.body.style.background = "#dd4c4cff";
      } else if (idade >= 21 && idade < 50) {
        //adulto
        img.setAttribute("src", "mulher.jpg");
        document.body.style.background = "#e02f2fff";
      } else {
        //idoso
        img.setAttribute("src", "mulheridosa.jpg");
        document.body.style.background = "#ad1b1bff";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<p>`;
    res.appendChild(img);
  }
}
