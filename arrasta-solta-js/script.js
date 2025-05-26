// Objeto para armazenar o conteúdo atual de cada área (a, b e c)
let areas = {
  a: null,
  b: null,
  c: null,
};

// Adiciona os eventos de arrastar aos elementos com a classe ".item"
document.querySelectorAll(".item").forEach(function (item) {
  item.addEventListener("dragstart", dragStart); // Início do arraste
  item.addEventListener("dragend", dragEnd);     // Fim do arraste
});

// Adiciona os eventos de drag às áreas de destino (a, b, c)
document.querySelectorAll(".area").forEach(function (area) {
  area.addEventListener("dragover", dragOver);     // Quando um item está sobre a área
  area.addEventListener("dragleave", dragLeave);   // Quando o item sai da área sem soltar
  area.addEventListener("drop", dragDrop);         // Quando o item é solto dentro da área
});

// Adiciona os eventos à área neutra (onde os itens começam e podem retornar)
document.querySelector(".neutralArea").addEventListener("dragover", dragOverNeutral);
document.querySelector(".neutralArea").addEventListener("dragleave", dragLeaveNeutral);
document.querySelector(".neutralArea").addEventListener("drop", dropNeutral);

// =====================
// Funções relacionadas ao item sendo arrastado
// =====================

// Adiciona a classe "dragging" ao item que está sendo arrastado
function dragStart(event) {
  event.currentTarget.classList.add("dragging");
}

// Remove a classe "dragging" do item após o arraste terminar
function dragEnd(event) {
  event.currentTarget.classList.remove("dragging");
}

// =====================
// Funções para as áreas de destino (a, b, c)
// =====================

// Permite o drop apenas se a área estiver vazia
function dragOver(event) {
  if (event.currentTarget.querySelector(".item") === null) {
    event.preventDefault(); // Necessário para permitir o drop
    event.currentTarget.classList.add("hover"); // Destaca a área
  }
}

// Remove o destaque da área quando o item sai de cima dela
function dragLeave(event) {
  event.currentTarget.classList.remove("hover");
}

// Quando o item é solto na área
function dragDrop(area) {
  area.currentTarget.classList.remove("hover"); // Remove o destaque

  // Só permite soltar se a área estiver vazia
  if (area.currentTarget.querySelector(".item") === null) {
    let dragItem = document.querySelector(".item.dragging"); // Pega o item sendo arrastado
    area.currentTarget.append(dragItem); // Adiciona o item à área
    updateAreas(); // Atualiza o estado das áreas
  }
}

// =====================
// Funções para a área neutra
// =====================

// Permite soltar item na área neutra
function dragOverNeutral(event) {
  event.preventDefault(); // Permite o drop
  event.currentTarget.classList.add("hover"); // Destaca a área
}

// Remove o destaque quando o item sai da área neutra
function dragLeaveNeutral(event) {
  event.currentTarget.classList.remove("hover");
}

// Quando o item é solto na área neutra
function dropNeutral(area) {
  area.currentTarget.classList.remove("hover");

  let dragItem = document.querySelector(".item.dragging"); // Item sendo arrastado
  area.currentTarget.append(dragItem); // Coloca o item de volta na área neutra
  updateAreas(); // Atualiza o estado das áreas
}

// =====================
// Função para atualizar o objeto `areas` e validar a ordem correta
// =====================

function updateAreas() {
  // Para cada área de destino...
  document.querySelectorAll(".area").forEach(function (area) {
    let name = area.getAttribute("data-name"); // Pega o nome da área (a, b ou c)

    // Se tiver um item dentro da área...
    if (area.querySelector(".item") != null) {
      // Salva o conteúdo (texto) do item no objeto `areas`
      areas[name] = area.querySelector(".item").innerHTML;
    } else {
      // Se estiver vazia, salva como null
      areas[name] = null;
    }
  });

  // Verifica se os itens estão na ordem correta (1, 2, 3)
  if (areas.a === "1" && areas.b === "2" && areas.c === "3") {
    document.querySelector(".areas").classList.add("correct"); // Adiciona destaque visual
  } else {
    document.querySelector(".areas").classList.remove("correct"); // Remove destaque se errar
  }
}
