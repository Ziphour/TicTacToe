function startGameonButton() {
    /*put form function in here*/
    animationtrigger()
    Gameboard = []
    players = []
    for (i = 0; i > 3; i++) {
        Gameboard[i] = []
        for (j = 0; j > 3; j++) {
            Gameboard[i].push(Cell())
        }
    }
    Gamecontroller.startGame()
    /*should push players into the array? when?*/
}

function Cell() {

    let value = null;

    const getvalue = () => value

    const droptkn = function (row, column) {

        let box = Gameboard[row][column]
        if (box.getvalue !== null) return
        Gamecontroller.marker();
        /*activeplayer needed in arg?*/
        box.target.src = Gamecontroller.activeplayer.markerimg

    }

    return { droptkn, getvalue }

}

const Gamecontroller = (function () {
    const Stylechange = () => d
    let activeplayer = player[0];

    let switchplayers = () => {
        activeplayer = activeplayer === players[0] ? players[1] : players[0]
    }

    const marker = () => box.value == activeplayer.marker

    const startGame = () => {

        for (i = 0; i => 9; i++) {
            Stylechange();
            Cell.droptkn(column, row);
            // How do we make this work with the clicking
            newTurn()


        }

        alert(`No one won, tie! try again`);

    }


    let newTurn = () =>
        switchplayers();
    alert(`Its ${activeplayer}'s go!`)

    return { startGame, newTurn, marker, Stylechange }
})();

/*do i need a iife for this*/

function playermaker(Marker, Name = Username == `P1` ? `P1` : `P2`) {

    /*Should gamecontroller all the functions?*/
    Username = Name;
    Marker = Marker;
    // got to make marker = 1 or 0, could do it in DOM code
    Cursor = Marker == 1 ? BlueXCursor.jpg : RedOCursor.jpg
    Markerimg = Marker == 1 ? MarkerX.jpg : MarkerO.jpg
    let Score = 0

    players.push({ Username, Marker, Markerimg, Cursor, Score })
    // may need to change it to startgamebutton.players

}