document.body.addEventListener("keyup", function (event) {
  playSound(event.code.toLowerCase());
});

document
  .querySelector(".composer button")
  .addEventListener("click", function () {
    let song = document.querySelector("#input").value;

    if (song) {
      let songArray = song.split("");
      playComposition(songArray);
    }
  });

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(function () {
      keyElement.classList.remove("active");
    }, 300);
  }
}

function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(function () {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}

document.querySelectorAll(".key").forEach(function (keyElement) {
  keyElement.addEventListener("click", function () {
    let key = keyElement.getAttribute("data-key");
    playSound(key);
  });
});
