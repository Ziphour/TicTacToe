// const winCond = (function () {

//     const winConditionList = [
//       [[1, 1], [1, 2], [1, 3]],
//       [[2, 1], [2, 2], [2, 3]],
//       [[3, 1], [3, 2], [3, 3]],
//       [[1, 1], [2, 1], [3, 1]],
//       [[1, 2], [2, 2], [3, 2]],
//       [[1, 3], [2, 3], [3, 3]],
//       [[1, 1], [2, 2], [3, 3]],
//       [[1, 3], [2, 2], [1, 3]],
//     ]
  
//     const winCheck = function () {
  
//       for (i = 0; i < winConditionList.length; i++) {
  
//         let test = winConditionList[i].every(value => value.every(Numb => let[row, col] = Numb.split('')))

//         for (j = 0; j < 3; j++) {
//           winConditionList[i][j]
//         }
//       }
  
//     }
    
  
//     return { winConditionList }
  
//   })()

Gameboard = [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ]

  
// console.log(Gameboard)

function Cell() {

    let value = 0
  
    const getvalue = () => value;
  
    const marker = (player) => value = player.marker
  
    return { getvalue, marker }
  
  }
  




const winCondTEST = (function () {

    const winConditionList = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        // REMEMBER YOU NEED TO CHANGE THE OG SCRIPT WIN COND BEC YOU NEED TO MINUS THEM BY -1
    ]
    // make row col for all three, map them into new array, then do the every thing one
    // cheeck includes column
    winConditionList.every(value => value === 0)
    // this should give a total win

    for (i = 0; i < winConditionList.length; i++) {

        let gameBoardTokens = winConditionList[i].map(checkTokens)

        function checkTokens(value){
            let [row, col] = value
            return Gameboard[row][col]
        }

        console.log(gameBoardTokens)

        const checkWin = gameBoardTokens.every(value => value === 0)
        if (checkWin === true){console.log(`congrats!`) }

    }
    // check if one two three in another loop all equal, token if not BREAK loop
             // const [row, col] = innerWincondiValues

    //  splice or any array methods>?
    // lookk up array methods


})()
  
  

          // get co-ord of two numb, check if it's equ = activeplayer.marker
        // if not skip, if the code fully runs through, activate win condition
        // BIGGEST ROADBLOCK, how do I get values inside two arrays
  
        // use splice to put it into two []? {...} = box[][]
        // breaks move onto next one, if no break declare winner