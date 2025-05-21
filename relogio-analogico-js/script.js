// Seleciona os elementos do relógio digital e os ponteiros
let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");
let dateElement = document.querySelector(".date");

// Atualiza o relógio a cada segundo
function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Atualiza o relógio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Calcula a rotação dos ponteiros
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour + (30 / 60) * minute) - 90;

    // Aplica a rotação no estilo dos ponteiros
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

    let objDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = now.toLocaleDateString('PT-BR', objDate);
    dateElement.innerHTML = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

// Adiciona zero à esquerda quando necessário
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

// Inicia o relógio
setInterval(updateClock, 1000);
updateClock();
