
$(function(){
  $("#frase-2").hide();
});

var verificar = 0;

const card = document.querySelector("#card-flip");

card.addEventListener("click", (e) => {

  card.classList.toggle("flip");

  if (verificar == "0") {
    verificar = 1;
    $("#frase-1").fadeOut(630);
    $("#frase-2").delay(500);
    // $("#frase-2").animate({width:'toggle'},2000);
    $("#frase-2").slideDown("slow");
  }

  else if (verificar == "1") {
    verificar = 0;
    $("#frase-2").fadeOut(630);
    $("#frase-1").delay(500);
    // $("#frase-1").animate({width:'toggle'},2000);
    $("#frase-1").slideDown("slow");
  }

});
