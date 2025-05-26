let areas = {
  a: null,
  b: null,
  c: null,
};

document.querySelectorAll(".item").forEach(function (item) {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach(function (area) {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", dragDrop);
});

document.querySelector(".neutralArea").addEventListener("dragover", dragOverNeutral);
document.querySelector(".neutralArea").addEventListener("dragleave", dragLeaveNeutral);
document.querySelector(".neutralArea").addEventListener("drop", dropNeutral);

//Functions Item
function dragStart(event) {
  event.currentTarget.classList.add("dragging");
}

function dragEnd(event) {
  event.currentTarget.classList.remove("dragging");
}

//Functions Área
function dragOver(event) {
  if (event.currentTarget.querySelector(".item") === null) {
    event.preventDefault();
    event.currentTarget.classList.add("hover");
  }
}
function dragLeave(event) {
  event.currentTarget.classList.remove("hover");
}
function dragDrop(area) {
  area.currentTarget.classList.remove("hover");

  if (area.currentTarget.querySelector(".item") === null) {
    dragItem = document.querySelector(".item.dragging");
    area.currentTarget.append(dragItem);
    updateAreas();
  }
}

//Functions Neutral Área

function dragOverNeutral(event) {
  event.preventDefault();
  event.currentTarget.classList.add("hover");
}
function dragLeaveNeutral(event) {
  event.currentTarget.classList.remove("hover");
}
function dropNeutral(area) {
  area.currentTarget.classList.remove("hover");

  let dragItem = document.querySelector(".item.dragging");
  area.currentTarget.append(dragItem);
  updateAreas();
}

// Logic Functions

function updateAreas() {
  document.querySelectorAll(".area").forEach(function (area) {
    let name = area.getAttribute("data-name");
    if (area.querySelector(".item") != null) {
      areas[name] = area.querySelector(".item").innerHTML;
    } else {
      areas[name] = null;
    }
  });

  if (areas.a === "1" && areas.b === "2" && areas.c === "3") {
    document.querySelector(".areas").classList.add("correct");
  } else {
    document.querySelector(".areas").classList.remove("correct");
  }
}
