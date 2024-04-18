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

Gameboard = []
for (i = 0; i < 3; i++) {
  Gameboard[i] = []
  for (j = 0; j < 3; j++) {
    Gameboard[i].push(0)
  }
}
  
const winCondTEST = (function () {

    const winConditionList = [
        [[1, 1], [1, 2], [1, 3]],
        [[2, 1], [2, 2], [2, 3]],

    ]

    winConditionList.every(value => value === 0)
    // this should give a total win

    for (i = 0; i < winConditionList.length; i++) {


        for (j = 0; j < 3; j++){

           const [row, col] = winConditionList[i][j]
           if(Gameboard[row][col].getvalue !== 1){
            console.log('break test')
            break;
           }

        }

        alert('You win!')
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