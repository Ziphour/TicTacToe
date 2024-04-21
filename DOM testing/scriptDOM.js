const Gamecontroller = (function () {
  players = [{
    Username: `p1`,
    marker: 1,
    score: 0

  },

  {
    Username: `p2`,
    marker: 2,
    score: 0


  }]


  const winConditionList = [

    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [0, 2]]

  ]


  const winCheck = function () {

    for (j = 0; j < winConditionList.length; j++) {

      let gameBoardTokens = winConditionList[j].map(checkTokens)

      function checkTokens(coordinates) {
        let [row, col] = coordinates
        return Gameboard[row][col].getvalue()

      }

      const checkWin = gameBoardTokens.every(value => value === activeplayer.marker)
      if (checkWin === true) {
        alert(`congrats ${activeplayer.Username}! 🥳`)
        activeplayer.score++
        throw new Error("End's the game!");
      }

    }
  }

  const startGame = () => {

    for (i = 0; i < 9; i++) {

      playRound(coordinates)
      winCheck()
      newTurn()

    }

    alert(`No one won, tie! try again`);

    // is this the best way to use a bbutton mechanic
    // while loop?
  }

  const playRound = function (coordinates) {

    // need this used before click
    droptkn(coordinates)
    winCheck()
    draw()
    newTurn()

  }


  const draw = function () {
    if (i === 8) {
      alert(`No one won, try again!`)
      throw new console.error(`draw`);
    }
    i++
  }




  let activeplayer = players[0];

  let switchplayers = () => {
    activeplayer = activeplayer == players[0] ? players[1] : players[0]
  }

  let newTurn = () => {
    switchplayers();
    alert(`Its ${activeplayer.Username}'s go!`)
  }



  const droptkn = function (coordinates) {

    const [row, col] = coordinates
    let box = Gameboard[row][col]
    if (box.getvalue() === null) {
      box.marker(activeplayer);
    } else { droptkn() }

    // CHECK WIN COND HERE

    /*activeplayer needed in arg?*/
    // box.target.src = Gamecontroller.activeplayer.markerimg

  }

  return { droptkn, startGame, newTurn, players, activeplayer, winCheck, playRound }


})();

 function startGameonButton() {
  /*put form function in here*/
  Gameboard = []
  for (i = 0; i < 3; i++) {
    Gameboard[i] = []
    for (j = 0; j < 3; j++) {
      Gameboard[i].push(Cell())
    }
  }

  alert(`Its ${Gamecontroller.activeplayer.Username}'s go!`)
  // Gamecontroller.startGame()
  // need some way of stopping and starting the game 
}


function Cell() {

  let value = null

  const getvalue = () => value;

  const marker = (player) => value = player.marker

  return { getvalue, marker }

}


// Screen selector

const screenSelector = (function () {

  const tictacBoxes = document.querySelectorAll('.box')

  let k = 0

  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

      tictacBoxes[k].coordinates = [i, j]
      k++
    }

  }

  tictacBoxes.forEach(box => {
    box.addEventListener('click', test = function (e) {
      const coordinates = e.target.coordinates
      Gamecontroller.playRound(coordinates)
    })

  })

})()

