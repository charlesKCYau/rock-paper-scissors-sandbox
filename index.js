const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      // document.body.removeChild(outcome);
      document.getElementById("outcome").innerText = "";
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    // TODO Implement this method to update the DOM
    // There are some images you can use in the images directory
    console.log(moveOne, moveTwo, outcome);
    const playerOneImgId = document.body.querySelector("#player-one-move__img");
    const playerTwoImgId = document.body.querySelector("#player-two-move__img");
    if (moveOne === "rock") {
      playerOneImgId.src="./images/rock.png";
    } else if (moveOne === "paper") {
      playerOneImgId.src="./images/paper.png";
    } else if (moveOne === "scissors") {
      playerOneImgId.src="./images/scissors.png";
    }
    if (moveTwo === "rock") {
      playerTwoImgId.src="./images/rock.png";
    } else if (moveTwo === "paper") {
      playerTwoImgId.src="./images/paper.png";
    } else if (moveTwo === "scissors") {
      playerTwoImgId.src="./images/scissors.png";
    }
    if (document.getElementById("outcome")) {
      document.getElementById("outcome").innerText = outcome;
    } 

  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  