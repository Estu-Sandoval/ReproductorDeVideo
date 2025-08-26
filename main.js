const listaVideos = [
  "./Mi Corazón Encantado.mp4",
  "./Pegasus Fantasy.mkv",
  "./Vuela, Pega y Esquiva.mp4",
];

const botones = document.querySelectorAll(".btn");

const video = document.getElementById("video");

const barraProgreso = document.querySelector(".progreso");

video.src = listaVideos[0];

botones[0].addEventListener("click", () => {
  if (botones[0].classList.contains("play")) {
    video.play();
    setInterval(cambiarTamagnoProgreso,100);
    botones[0].classList.replace("play", "pausa");
  } else {
    video.pause();
    i
    botones[0].classList.replace("pausa", "play");
  }
});

function cambiarTamagnoProgreso(){
    let tamagno = video.currentTime  * 100 / video.duration;
    barraProgreso.style.width = tamagno + "%";
}



botones[3].addEventListener("click",() => {
  video.requestFullscreen();
})
