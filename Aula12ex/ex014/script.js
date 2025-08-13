function carregar() {
  var msg = document.getElementById("msg");
  var msg2 = document.getElementById("msg2");
  var img = document.getElementById("imagem");
  var sec = document.getElementById("sec");
  var data = new Date(); //chama o contrutor 'new'
  var hora = data.getHours(); //pega a informação de horas do construtor
  var minutos = data.getMinutes(); //pega a informação de minutos do construtor

  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

  if (hora >= 8 && hora <= 12) {
    msg2.innerHTML = "Tenha um bom dia!"; //Bom dia
    img.src = "manha1.png";
    document.body.style.background = "#ecee6eff";
    sec.style.background = "#FDFE54";
  } else if (hora >= 13 && hora <= 18) {
    msg2.innerHTML = "Tenha uma boa tarde!"; //Boa tarde
    img.src = "tarde.png";
    document.body.style.background = "#FDC566";
    sec.style.background = "#ECD090";
  } else {
    msg2.innerHTML = "Tenha uma boa noite!"; //Boa noite
    img.src = "noite.png";
    document.body.style.background = "#203868";
    sec.style.background = "#2098bdff";
  }
}
