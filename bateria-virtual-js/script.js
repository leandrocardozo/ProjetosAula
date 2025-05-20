// Ouve o evento de tecla solta no corpo da página
document.body.addEventListener("keyup", function (event) {
  // Toca o som da tecla pressionada (convertendo para minúsculo)
  playSound(event.code.toLowerCase());
});

// Ouve o clique no botão "Tocar"
document
  .querySelector(".composer button")
  .addEventListener("click", function () {
    // Pega a sequência de letras digitadas no input
    let song = document.querySelector("#input").value;

    if (song) {
      // Transforma a sequência em um array de letras
      let songArray = song.split("");
      // Toca a composição letra por letra
      playComposition(songArray);
    }
  });

// Função que toca o som e anima a tecla correspondente
function playSound(sound) {
  // Pega o elemento <audio> do som
  let audioElement = document.querySelector(`#s_${sound}`);
  // Pega o botão da tecla na tela
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0; // Reseta o som para o começo
    audioElement.play(); // Toca o som
  }

  if (keyElement) {
    // Adiciona a classe "active" para animação visual
    keyElement.classList.add("active");
    // Remove a classe depois de 300ms
    setTimeout(function () {
      keyElement.classList.remove("active");
    }, 300);
  }
}

// Função que toca uma sequência de sons, com delay
function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(function () {
      playSound(`key${songItem}`); // Toca cada som com atraso
    }, wait);
    wait += 250; // Aumenta o atraso a cada som para tocar sequencialmente
  }
}

// Adiciona evento de clique em todas as teclas na tela
document.querySelectorAll(".key").forEach(function (keyElement) {
  keyElement.addEventListener("click", function () {
    // Pega o atributo data-key da tecla clicada
    let key = keyElement.getAttribute("data-key");
    // Toca o som correspondente
    playSound(key);
  });
});
