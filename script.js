const wordCollection = [
  "India",
  "Cheetah",
  "Elephant",
  "Electronics",
  "Javascript",
  "React",
  "HTML",
  "CSS",
  "WordPress",
  "Software",
  "Hardware",
];

let selectedWord = null,
  livesLeft = 5;

const ENABLED = "enabled",
  DISABLED = "disabled";

(function () {
  const keyboardContainerElem = document.getElementById("keyboard-container");
  for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i);
    const btnElem = document.createElement("button");
    btnElem.setAttribute("class", "btn");
    btnElem.setAttribute("id", letter);
    btnElem.addEventListener("click", handleClick);
    btnElem.innerHTML = letter;
    keyboardContainerElem.appendChild(btnElem);
  }
  selectWordRandomly();
  document.getElementById("lives").innerHTML = livesLeft;
})();

function selectWordRandomly() {
  const index = Math.round(Math.random() * 10);
  selectedWord = wordCollection[index];
  const wordContainerElem = document.getElementById("word-container");

  for (let i = 0; i < selectedWord.length; i++) {
    const boxElem = document.createElement("div");
    boxElem.setAttribute("class", "box complete-center");
    boxElem.setAttribute("id", i);
    wordContainerElem.appendChild(boxElem);
  }
}

function handleClick(e) {
  const clickedLetter = e.target.innerHTML;
  let letterExists = false;
  for (let i = 0; i < selectedWord.length; i++) {
    if (clickedLetter.toLowerCase() === selectedWord[i].toLowerCase()) {
      document.getElementById(i).innerHTML = selectedWord[i];
      letterExists = true;
    }
  }
  if (!letterExists) {
    document.getElementById("lives").innerHTML = --livesLeft;
  }
  if (livesLeft <= 0) {
    updateCompleteKeyboard(true);
  }
  updateKey(e.target.id, true);
}

function updateCompleteKeyboard(operation) {
  for (i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i);
    updateKey(letter, operation);
  }
}

function updateKey(id, operation) {
  document.getElementById(id).disabled = operation;
}

function handleRestart() {
  updateCompleteKeyboard(false);
  livesLeft = 5;
  document.getElementById("lives").innerHTML = livesLeft;
  removeElements();
  selectWordRandomly();
}
function removeElements() {
  const wordContainerElem = document.getElementById("word-container");
  const boxesElem = document.getElementsByClassName("box"); // return []
  while (boxesElem.length > 0) {
    wordContainerElem.removeChild(boxesElem[boxesElem.length - 1]);
  }
}
