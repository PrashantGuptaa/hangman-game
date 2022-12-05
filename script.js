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

let selectedWord = null;

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
})();

function selectWordRandomly() {
    const index = Math.round(Math.random() * 10);
    selectedWord = wordCollection[index];
    const wordContainerElem = document.getElementById("word-container");

    for (let i = 0 ; i < selectedWord.length; i++) {
        const boxElem = document.createElement('div');
        boxElem.setAttribute("class", "box");
        boxElem.setAttribute("id", i);
        wordContainerElem.appendChild(boxElem);
    }

}

function handleClick(e) {
  console.log("Handling Click", e.target.innerHTML);
}

