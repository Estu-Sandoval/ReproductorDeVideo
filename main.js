const listaVideos = [
  "./Mi Corazón Encantado.mp4",
  "./Pegasus Fantasy.mkv",
  "./Vuela, Pega y Esquiva.mp4",
];

const botones = document.querySelectorAll(".btn");

const video = document.getElementById("video");

video.src = listaVideos[0];

botones[0].addEventListener("click", () => {
  if (botones[0].classList.contains("play")) {
    video.play();
    botones[0].classList.replace("play", "pausa");
  } else {
    video.pause();
    botones[0].classList.replace("pausa", "play");
  }
});
