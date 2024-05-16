let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let win = document.querySelector(".win");
let newbtn = document.querySelector("#new-btn");
let pop = document.querySelector("#pop");

let playerO = true;
let count = 0;
let wining = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Disable the button after winner anounces.
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
//enable the boxes when we reset the game and clear all the boxes.
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
//Reset game.
const resetgame = () => {
  playerO = true;
  count = 0;
  enableboxes();
  win.classList.add("hide");
};

//It's shows the Winner and calls the disableboxes() function that disable the box after winner anouce.
const showwinner = (pos0) => {
  pop.innerText = `Congratualtion, Winner is ${pos0}.`;
  win.classList.remove("hide");
  disableboxes();
};
//Draw Condition.
const gameDraw = () => {
  pop.innerText = `Game Draw.`;
  win.classList.remove("hide");
  disableboxes();
};
//Used to give inner text when user click the box.
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (playerO) {
      box.innerText = "O";
      playerO = false;
    } else {
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;
    //For draw condition.
    count++;
    let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

//Checks Winner who won's.
const checkwinner = () => {
  for (let pattern of wining) {
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;
    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 === pos1 && pos1 === pos2) {
        console.log("winner", pos0);
        showwinner(pos0);
      }
    }
  }
};
reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
