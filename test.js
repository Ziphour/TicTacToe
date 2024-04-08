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


const Gamecontroller = (function(){
  players = [{
    Username: `p1`,
    marker: 0
  },
  
  {
    Username: `p2`,
    marker: 1


  }]

  const startGame = () => {

    for (i = 0; i < 9; i++) {
        
        droptkn(row,col)
        console.log(Gameboard)
        newTurn()


    }

    alert(`No one won, tie! try again`);

  }

  let newTurn = () =>{
    switchplayers();
  alert(`Its ${activeplayer.Username}'s go!`)}
    
     
  const Stylechange = () => null;


  let activeplayer = players[0];

  let switchplayers = () => {
    activeplayer = activeplayer == players[0] ? players[1] : players[0]
  }

  
    const droptkn = function(row, column) {
      let row = prompt(`which row`)
      let col = prompt(`which col`);
      row = row - 1
      col = col - 1  

    let box = Gameboard[row][column]
     console.log(box.getvalue())
    if (box.getvalue() === 100){
    } 
    box.marker(activeplayer);
    /*activeplayer needed in arg?*/
    // box.target.src = Gamecontroller.activeplayer.markerimg

  }

  return {droptkn, startGame, newTurn, Stylechange}


})();

function Cell() {

  let value = 100

  const getvalue = () => value;

  const marker = (player) => value = player.marker


 
  return { getvalue, marker }

}


/*do i need a iife for this*/

function playermaker(Marker, Name = Username == `P1` ? `P1` : `P2`) {

  /*Should gamecontroller all the functions?*/
  Username = Name;
  Marker = Marker;
  // make marker 1 or 0 based on clicked icon which has object that gives values to be spread
  Cursor = Marker == 0 ? BlueXCursor.jpg : RedOCursor.jpg
  Markerimg = Marker == 1 ? MarkerX.jpg :  MarkerO.jpg
  let Score = 0

  players.push({ Username, Marker, Markerimg, Cursor, Score })
  // may need to change it to startgamebutton.players

}

startGameonButton() 