// Need to check connect 4 oop and read their article

const startGame = function () {
  console.log("tests");
  screenSelector.resetScreen();
  screenSelector.animateLines();
  Gamecontroller.startGame();
};

const Gameboardcontrol = function () {
  const makeBoard = function () {
    Gameboard = [];
    for (i = 0; i < 3; i++) {
      Gameboard[i] = [];
      for (j = 0; j < 3; j++) {
        Gameboard[i].push(Cell());
      }
    }
  };

  return { makeBoard };
};

const Gamecontroller = (function () {
  players = [
    {
      Username: `p1`,
      marker: 1,
      markerImg: "o.png",
      cursor: 'url("src/cursor/O.png"), auto',
      score: 0,
    },

    {
      Username: `p2`,
      marker: 2,
      markerImg: "x.png",
      cursor: 'url("src/cursor/x.png"),auto',
      score: 0,
    },
  ];

  const winConditionList = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [2, 0],
      [1, 1],
      [0, 2],
    ],
  ];

  const winCheck = function () {
    for (j = 0; j < winConditionList.length; j++) {
      let gameBoardTokens = winConditionList[j].map(checkTokens);

      function checkTokens(coordinates) {
        let [row, col] = coordinates;
        return Gameboard[row][col].getvalue();
      }

      const checkWin = gameBoardTokens.every(
        (value) => value === getActivePlayer().marker
      );

      if (checkWin === true) {
        alert(`congrats ${getActivePlayer().Username}! 🥳`);
        getActivePlayer().score++;
        throw new Error("End's the game!");
      }
    }
  };

  const startGame = function () {
    Gameboard.makeBoard();
    screenSelector.customCursorSwitch();
    alert(`Its ${getActivePlayer().Username}'s go!`);
    screenSelector.allowClicks();
  };

  const playRound = function (e) {
    droptkn(e);
    screenSelector.markerAnimationsXO(e, getActivePlayer);
    winCheck();
    // possibly put draw check? drawCheck() or win check with a for loop?
    newTurn();
  };

  let activePlayer = players[0];

  let switchplayers = () => {
    activePlayer = activePlayer == players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  let newTurn = () => {
    switchplayers();
    alert(`Its ${getActivePlayer().Username}'s go!`);
    screenSelector.customCursorSwitch();
  };

  const droptkn = function (e) {
    const coordinates = e.target.coordinates;
    const [row, col] = coordinates;
    let box = Gameboard[row][col];
    if (box.getvalue() === null) {
      box.marker(getActivePlayer());
    } else {
      droptkn();
    }

    // CHECK WIN COND HERE

    /*getActivePlayer needed in arg?*/
    // box.target.src = Gamecontroller.getActivePlayer.markerimg
  };

  return {
    droptkn,
    newTurn,
    players,
    getActivePlayer,
    winCheck,
    playRound,
    startGame,
  };
})();

function Cell() {
  let value = null;

  const getvalue = () => value;

  const marker = (player) => (value = player.marker);

  return { getvalue, marker };
}

// Screen selector

const screenSelector = (function () {
  // Need to have the button be unclickable after this idk?

  const tictacBoxes = document.querySelectorAll(".box");

  let k = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tictacBoxes[k].coordinates = [i, j];
      k++;
    }
    // this will assign co-ordinates to the elements associated with the gameboard
    // should i put this in a start game button
  }

  const allowClicks = function () {
    tictacBoxes.forEach((box) => {
      box.addEventListener("click", function clickBoxEvent(e) {
        Gamecontroller.playRound(e);
      });
    });
  };

  const markerAnimationsXO = function (e, getActivePlayer) {
    const node = e.target;
    const nodeImg = document.createElement("img");
    nodeImg.classList.add("objectfit");
    nodeImg.src = getActivePlayer().markerImg;
    node.appendChild(nodeImg);
  };

  const animateLines = function () {
    const line = document.querySelectorAll(".line");
    console.log(line);
    line.forEach((element) => {
      element.style.strokeDashoffset = "0";
      element.style.animation = "lineduration 1s linear";
    });
    // have to reset all values if you want to restart the game

    // change dash offset
    // makke keyframes
  };

  const resetScreen = () => {
    const div = document.querySelectorAll(".box");
    const img = document.querySelectorAll("img");
    div.forEach((box) => {
      img.forEach((image) => box.removeChild(image));
    });
  };

  const customCursorSwitch = () => {
    const body = document.querySelector("body");
    body.style.cursor = Gamecontroller.getActivePlayer().cursor;
  };

  const startButton = document.querySelector("#startBtn");
  startButton.addEventListener("click", startGame);

  return {
    markerAnimationsXO,
    allowClicks,
    resetScreen,
    animateLines,
    customCursorSwitch,
  };
})();
