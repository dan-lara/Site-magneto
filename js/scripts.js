new SimpleAnime();


const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-animeTime]');
const animationClass = 'animate'; 

function animeScroll() {

  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } 
    // else {
    //   element.classList.remove(animationClass);
    // }
  })

}

animeScroll();

if(target.length) {

  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));

}



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
    $("#frase-2").slideDown("slow");
  }

  else if (verificar == "1") {
    verificar = 0;
    $("#frase-2").fadeOut(630);
    $("#frase-1").delay(500);
    $("#frase-1").slideDown("slow");
  }

});
