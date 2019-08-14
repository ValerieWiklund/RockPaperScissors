let randomChoice = "";
let response = " ";



function randomNumber() {
  let number = Math.floor(Math.random() * (3 - 1 + 1)) + 1
  switch (number) {
    case 1:
      randomChoice = "Rock";
      break;
    case 2: randomChoice = "Paper";
      break;
    case 3: randomChoice = "Scissors";
  }
}


// function draw() {
//   let reply = document.querySelector("#winorlose");
//   reply.textContent = response;
// }








function play(playersChoice) {
  randomNumber()
  let computerChoice = randomChoice;
  if (computerChoice == playersChoice) {
    response = "Its a tie!";
  } else if (playersChoice == "Paper") {
    if (computerChoice == "Rock") {
      response = "You chose well! The Computer chose " + computerChoice;
    } else if (computerChoice == "Scissors") {
      response = "You chose poorly. The computer won with " + computerChoice;
    }
  }
  else if (playersChoice == "Scissors") {
    if (computerChoice == "Paper") {
      response = "You chose well! The Computer chose " + computerChoice;
    } else if (computerChoice == "Rock") {
      response = "You chose poorly. The computer won with " + computerChoice;
    }
  }
  else if (playersChoice == "Rock") {
    if (computerChoice == "Scissors") {
      response = "You chose well! The Computer chose " + computerChoice;
    } else if (computerChoice == "Paper") {
      response = "You chose poorly. The computer won with " + computerChoice;
    }
  }
  draw();
}

function draw() {
  let reply = document.querySelector("#winorlose");
  reply.textContent = response;
}


























  // if ((computerChoice == "Rock" && playersChoice == "Paper") || (computerChoice == "Paper" && playersChoice == "Scissors") || (computerChoice == "Scissors" && playersChoice == "Rock")) {
  //   alert("You  win! The Computer chose " + computerChoice);
  // } else if ((computerChoice == "Rock" && playersChoice == "Scissors") || (computerChoice == "Scissors" && playersChoice == "Paper") || (computerChoice == "Paper" && playersChoice == "Rock")) {
  //   alert("You lose. The computer chose " + computerChoice);
  // } else alert("Its a tie!")

