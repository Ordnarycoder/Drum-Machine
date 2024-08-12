document.addEventListener("DOMContentLoaded", () => {
  const pads = document.querySelectorAll(".drum-pad");
  const display = document.getElementById("display");

  pads.forEach(pad => {
    pad.addEventListener("click", () => {
      playSound(pad);
    });
  });

  document.addEventListener("keydown", event => {
    const key = event.key.toUpperCase();
    const pad = document.getElementById(key);
    if (pad) {
      playSound(pad.parentElement);
    }
  });

  function playSound(pad) {
    const audio = pad.querySelector("audio");
    audio.currentTime = 0;
    audio.play();
    display.innerText = pad.id;
  }
});