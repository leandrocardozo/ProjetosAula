// Referências a elementos do DOM
const input = document.querySelector("#taskInput");
const btnAddTask = document.querySelector("#addButtonTask");
const ul = document.querySelector("#taskList");
const deleteTask = document.querySelector("#deleteTask");
const clearTask = document.querySelector("#clearTask");

// Adiciona uma nova tarefa à lista
function addTask() {
  let task = input.value.trim();
  if (!task) return; // Ignora tarefas vazias

  let li = document.createElement("li");
  li.innerHTML = `${task}
  <button class='edit'>✏️ </button>
  <button class='del'>🗑</button>`;
  ul.appendChild(li);
  input.value = "";

  // Adiciona eventos de editar e deletar à nova tarefa
  li.querySelector(".edit").addEventListener("click", editThisTask);
  li.querySelector(".del").addEventListener("click", delThisTask);
}

// Permite adicionar tarefa ao pressionar Enter no input principal
function enterAddTask(event) {
  if (event.key === "Enter") addTask();
}

// Remove a última tarefa da lista
function deleteLastTask() {
  ul.lastChild.remove();
}

// Limpa todas as tarefas da lista
function clearTasks() {
  ul.innerHTML = "";
}

// Habilita edição inline da tarefa selecionada
function editThisTask(event) {
  const btn = event.target;
  const li = btn.parentElement;
  const taskText = li.firstChild.textContent.trim();

  li.innerHTML = "";

  const inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = taskText;
  li.appendChild(inputEdit);
  inputEdit.focus();

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾";
  li.appendChild(saveBtn);

  // Salva edição ao pressionar Enter
  inputEdit.addEventListener("keyup", (event) => {
    if (event.key === "Enter") saveBtn.click();
    // Cancela edição ao pressionar Escape, restaurando o texto original
    if (event.key === "Escape") {
      li.innerHTML = `${taskText}
      <button class='edit'>✏️ </button>
      <button class='del'>🗑</button>`;

      li.querySelector(".edit").addEventListener("click", editThisTask);
      li.querySelector(".del").addEventListener("click", delThisTask);
    }
  });

  // Salva a tarefa editada ao clicar no botão salvar
  saveBtn.addEventListener("click", () => {
    const newText = inputEdit.value.trim();
    if (!newText) return;

    li.innerHTML = `${newText}
    <button class='edit'>✏️ </button>
    <button class='del'>🗑</button>`;

    li.querySelector(".edit").addEventListener("click", editThisTask);
    li.querySelector(".del").addEventListener("click", delThisTask);
    input.focus();
  });
}

// Remove a tarefa clicada
function delThisTask(event) {
  const btn = event.target;
  btn.parentElement.remove();
}

// Eventos principais
btnAddTask.addEventListener("click", addTask);
input.addEventListener("keyup", enterAddTask);
deleteTask.addEventListener("click", deleteLastTask);
clearTask.addEventListener("click", clearTasks);
