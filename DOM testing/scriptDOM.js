// Need to check connect 4 oop and read their article


const Gamecontroller = (function () {
  players = [{
    Username: `p1`,
    marker: 1,
    markerImg: 'o.png',
    score: 0,

  },

  {
    Username: `p2`,
    marker: 2,
    markerImg: 'x.png',
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
    [[2, 0], [1, 1], [0, 2]]

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

  const makeBoard = function () {

    Gameboard = []
    for (i = 0; i < 3; i++) {
      Gameboard[i] = []
      for (j = 0; j < 3; j++) {
        Gameboard[i].push(Cell())
      }
    }

  }

  const startGame = function () {
    makeBoard()
    alert(`Its ${activeplayer.Username}'s go!`)
    screenSelector.allowClicks();
  }

  const playRound = function (e) {

    droptkn(e)
    screenSelector.markeranimationsX(e, activeplayer)
    winCheck()
    // possibly put draw check? drawCheck() or win check with a for loop?
    newTurn()

  }





  let activeplayer = players[0];

  let switchplayers = () => {
    activeplayer = activeplayer == players[0] ? players[1] : players[0]
  }

  let newTurn = () => {
    switchplayers();
    alert(`Its ${activeplayer.Username}'s go!`)
  }



  const droptkn = function (e) {

    const coordinates = e.target.coordinates
    const [row, col] = coordinates
    let box = Gameboard[row][col]
    if (box.getvalue() === null) {
      box.marker(activeplayer);
    } else { droptkn() }

    // CHECK WIN COND HERE

    /*activeplayer needed in arg?*/
    // box.target.src = Gamecontroller.activeplayer.markerimg

  }

  return { droptkn, newTurn, players, activeplayer, winCheck, playRound, makeBoard, startGame }


})();



function Cell() {

  let value = null

  const getvalue = () => value;

  const marker = (player) => value = player.marker

  return { getvalue, marker }

}


// Screen selector

const screenSelector = (function () {

  // Need to have the button be unclickable after this idk?

  const tictacBoxes = document.querySelectorAll('.box')

  let k = 0

  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

      tictacBoxes[k].coordinates = [i, j]
      k++
    }
    // this will assign co-ordinates to the elements associated with the gameboard
  }

  const allowClicks = function () {


    tictacBoxes.forEach(box => {
      box.addEventListener('click', function clickBoxEvent(e) {
        Gamecontroller.playRound(e)
      })

    })

  }

  const markeranimationsX = function (e, activeplayer) {
    const node = e.target
    const nodeImg = document.createElement('img')
    nodeImg.classList.add("objectfit")
    nodeImg.src = activeplayer.markerImg
    node.appendChild(nodeImg)
  }

  const animateLines = function () {

    const line = document.querySelectorAll('.line');
    console.log(line)
    line.forEach(element => {
      element.style.strokeDashoffset = "0"
      element.style.animation = "lineduration 1s linear"
    });
  

    // change dash offset 
    // makke keyframes
  }

  const updateScreen = () => n

  const startGame = function () {

    animateLines()
    Gamecontroller.startGame()

  }


  const startButton = document.querySelector('#startBtn')
  startButton.addEventListener('click', startGame)


  return { markeranimationsX, allowClicks, }

})()
