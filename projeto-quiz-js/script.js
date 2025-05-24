//Initial data
let currentQuestion = 0;
let correctAnswers = 0;

let currentRound = 0; // índice da rodada atual
let questions = roundQuestions[currentRound]; // perguntas da rodada atual

const progressBar = document.querySelector(".progress--bar");

showQuestion();

//Events
document.querySelector(".scoreArea button").addEventListener("click", resetEvent);

//Functions
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    let pct = Math.floor((currentQuestion / questions.length) * 100);
    progressBar.style.width = `${pct}%`;

    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";

    document.querySelector(".question").innerHTML = q.question;
    let optionsHtml = "";
    for (let i in q.options) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
    }
    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach(function (item) {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    finishQuiz();
  }
}

const nextQuestion = document.querySelector(".nextQuestion");
nextQuestion.addEventListener("click", function () {
  currentQuestion++;
  showQuestion();
  nextQuestion.style.display = "none";

  document.querySelector(".explanation").style.display = "none";
});


function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute("data-op"));
  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++;
  }
  nextQuestion.style.display = "block";

  document.querySelectorAll(".options .option").forEach(function (opcaoAtual, indexOpcoes) {
    if (indexOpcoes === questions[currentQuestion].answer) {
      opcaoAtual.classList.add("correct");
    } else if (indexOpcoes === clickedOption) {
      opcaoAtual.classList.add("wrong");
    }

    opcaoAtual.removeEventListener("click", optionClickEvent);
  });

  const explanation = document.querySelector(".explanation");
  explanation.innerHTML = questions[currentQuestion].explanation;
  explanation.style.display = "block";
}

function finishQuiz() {
  let points = Math.floor((correctAnswers / questions.length) * 100);

  if (points < 30) {
    document.querySelector(".scoreText1").innerHTML = "Tá ruim em!?";
    document.querySelector(".scorePct").style.color = "#FF0000";
  } else if (points <= 70) {
    document.querySelector(".scoreText1").innerHTML = "Muito bom!";
    document.querySelector(".scorePct").style.color = "#FFFF00";
  } else {
    document.querySelector(".scoreText1").innerHTML = "Parabéns!";
    document.querySelector(".scorePct").style.color = "#0D630D";
  }

  document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`;
  document.querySelector(".scoreText2").innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".questionArea").style.display = "none";
  progressBar.style.width = `100%`;

  currentRound++;
  if (currentRound >= roundQuestions.length) {
    currentRound = 0; // Volta para a primeira rodada se passar da última
  }
}

function resetEvent() {
  questions = roundQuestions[currentRound];
  correctAnswers = 0;
  currentQuestion = 0;
  showQuestion();
}
