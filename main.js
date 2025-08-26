const listaVideos = [
  
];

var pos = 0;

const botones = document.querySelectorAll(".btn");

const video = document.getElementById("video");

const barraProgreso = document.querySelector(".progreso");

const barraVolumen = document.querySelector(".volumen");

const contenedorProgreso = document.querySelector(".container_progreso");

const contenedorVolumen = document.querySelector(".container_volumen");

video.src = listaVideos[pos];

botones[0].addEventListener("click", () => {
  if (botones[0].classList.contains("play")) {
    video.play();
    setInterval(cambiarTamagnoProgreso,100);
    botones[0].classList.replace("play", "pausa");
  } else {
    video.pause();
    botones[0].classList.replace("pausa", "play");
  }
});

botones[1].addEventListener("click",videoAnterior);

botones[2].addEventListener("click",siguienteVideo);

botones[3].addEventListener("click",() => {
  video.requestFullscreen();
})

contenedorProgreso.addEventListener("click",irATiempo);

contenedorVolumen.addEventListener("click",cambiaVolumen);

function cambiarTamagnoProgreso(){
    let tamagno = video.currentTime  * 100 / video.duration;
    barraProgreso.style.width = tamagno + "%";
}

function irATiempo(evento){
  let ratonX = evento.offsetX;
  video.currentTime = video.duration * ratonX/getComputedStyle(contenedorProgreso).width.replace("px","");
}

function cambiaVolumen(evento){
  let ratonX = evento.offsetX;
  video.volume =  ratonX/getComputedStyle(contenedorVolumen).width.replace("px","");
  barraVolumen.style.width = ratonX + "px";
}

function siguienteVideo(){
  if(pos < listaVideos.length - 1){
    pos++
  }
  else{
    pos = 0;
  }
  video.src = listaVideos[pos];
  botones[0].classList.replace("pausa","play");
}

function videoAnterior(){
  if(pos > 0){
    pos--
  }
  else{
    pos = listaVideos.length - 1;
  }
  video.src = listaVideos[pos];
  botones[0].classList.replace("pausa","play");
}
