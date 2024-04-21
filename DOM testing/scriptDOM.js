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

    const playRound = function (e) {

      // need this used before click
      droptkn(e)
      screenSelector.markeranimationsX(e,activeplayer)
      winCheck()
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

    return { droptkn, startGame, newTurn, players, activeplayer, winCheck, playRound }


  })();



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
        Gamecontroller.playRound(e)

      })

    })

    const markeranimationsX = function (e, activeplayer) {
      // const svg = document.createElement('svg'); //Get svg element
      // const newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
      // newElement.setAttribute("d","m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"); //Set path's data
      // newElement.style.width = "329pt"
      // svg.appendChild(newElement);
      // e.target.appendChild(svg)

      const node = e.target
      const nodeImg = document.createElement('img')
      nodeImg.classList.add("objectfit")
      nodeImg.src = activeplayer.markerImg
      node.appendChild(nodeImg)
    }


    const updateScreen = () => x

    return{markeranimationsX}

  })()


