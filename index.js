let game = require('./game.js')
let size = 100
let gameBoard = game.makeField(size)

let gameGenerator = setInterval(() => {
  console.log(game.displayBoard(gameBoard))

  if (game.countAlive(gameBoard) === false) {
    clearInterval(gameGenerator)
  }
  gameBoard = game.nextGeneration(gameBoard)
}, 500)
