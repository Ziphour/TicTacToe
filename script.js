function startGameonButton() {
  /*put form function in here*/
  Gameboard = []
  for (i = 0; i < 3; i++) {
    Gameboard[i] = []
    for (j = 0; j < 3; j++) {
      Gameboard[i].push(Cell())
    }
  }
  Gamecontroller.startGame()
  /*should push players into the array? when?*/
}  


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

      droptkn()
      winCheck()
      newTurn()


    }

    alert(`No one won, tie! try again`);

  }




  let activeplayer = players[0];

  let switchplayers = () => {
    activeplayer = activeplayer == players[0] ? players[1] : players[0]
  }

  let newTurn = () => {
    switchplayers();
    alert(`Its ${activeplayer.Username}'s go!`)
  }



  const droptkn = function () {
    let row = prompt(`which row`)
    let col = prompt(`which col`);
    row = row - 1
    col = col - 1
    // this will be replaced by the click.

    let box = Gameboard[row][col]
    if (box.getvalue() === null) { box.marker(activeplayer)}
    else { droptkn() }
    // box.target.src = Gamecontroller.activeplayer.markerimg

  }

  return { droptkn, startGame, newTurn, players, activeplayer, winCheck }


})();



function Cell() {

  let value = null

  const getvalue = () => value;

  const marker = (player) => value = player.marker

  return { getvalue, marker }

}


const Stylechange = function () {

  const cursorChange = activeplayer => document.body.style.cursor = activeplayer.cursor
  //  might need active player gamecontroller

  const defaultCursor = () => document.body.style.cursor = j.jpg

  const cursorAnimation = () => document.body.style.cursor = smoke.gif

  return { defaultCursor, cursorChange, cursorAnimation }

  // sound effects when win, or wrong move

};

// win cond



// adding players

const newModal = document.querySelector(".Btn")
const popup = document.querySelector("#modal")


//  Modal
newModal.addEventListener('click', () => popup.showModal());

// playermaker

let playerProfile = document.querySelector('#textbox_id')
playerProfile.addEventListener('submit', e => {

  e.preventDefault()
  const data = new FormData(e.target);
  console.log(data)
  const newplayer = playermaker(...data.values());
  const playerList = Gamecontroller.players
  console.log(newplayer);
  playerList.push(newplayer)
  popup.close();


  function playermaker(Username, marker) {

    Username = Username;
    Marker = Marker
    token = Marker == 'X' ? 1 : 2
    Cursor = Marker == 'X' ? 'https://static-00.iconduck.com/assets.00/x-letter-emoji-256x256-uctmh0lm.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Small-dark-grey-circle.svg/1024px-Small-dark-grey-circle.svg.png'
    // Markerimg = Marker == 1 ? MarkerX.jpg : MarkerO.jpg
    let Score = 0

    return { Username, Score }

  }



})





// startGameonButton()

// Start button, input players, animation crosses active, plays the game, winner update score,
// retry button without animation start(would this matter as animation is on?), adds score.
