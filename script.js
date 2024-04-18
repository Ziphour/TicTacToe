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
    marker: 1
  },

  {
    Username: `p2`,
    marker: 2


  }]
  const startGame = () => {

    for (i = 0; i < 9; i++) {

      droptkn()
      console.log(Gameboard)
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

    let box = Gameboard[row][col]
    console.log(box.getvalue())
    if (box.getvalue() === null) {
      box.marker(activeplayer);
    } else { droptkn() }

    // CHECK WIN COND HERE

    /*activeplayer needed in arg?*/
    // box.target.src = Gamecontroller.activeplayer.markerimg

  }

  return { droptkn, startGame, newTurn, players, activeplayer }


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
  
  const defaultCursor = () =>  document.body.style.cursor =  j.jpg

  const cursorAnimation = () => document.body.style.cursor = smoke.gif

  return { defaultCursor, cursorChange, cursorAnimation }


};

// win cond

const winCond = (function () {

  const winConditionList = [
    [[1, 1], [1, 2], [1, 3]],
    [[2, 1], [2, 2], [2, 3]],
    [[3, 1], [3, 2], [3, 3]],
    [[1, 1], [2, 1], [3, 1]],
    [[1, 2], [2, 2], [3, 2]],
    [[1, 3], [2, 3], [3, 3]],
    [[1, 1], [2, 2], [3, 3]],
    [[1, 3], [2, 2], [1, 3]],
  ]

  const winCheck = function () {

    for (i = 0; i < winConditionList.length; i++) {

      let test = winConditionList[i].every(value => value.every(Numb => let[row, col] = Numb.split('')))
      // get co-ord of two numb, check if it's equ = activeplayer.marker
      // if not skip, if the code fully runs through, activate win condition
      // BIGGEST ROADBLOCK, how do I get values inside two arrays

      // use splice to put it into two []? {...} = box[][]
      // breaks move onto next one, if no break declare winner
      for (j = 0; j < 3; j++) {
        winConditionList[i][j]
      }
    }

  }

  return { winConditionList }

})()


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


  function playermaker(Username , marker) {

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
