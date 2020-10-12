import greeting from '../bin/cli.js'
import brainEven from './games/even.js'
import brainCalc from './games/calc.js'

const WINS_LIMIT = 3

const playGame = async (userName, game) => {
  let winsCount = 0
  console.log(game.instructions)
  while (winsCount < WINS_LIMIT) {
    // eslint-disable-next-line no-await-in-loop
    const roundIsWon = await game.playRound()
    if (!roundIsWon) {
      console.log(`Let's try again, ${userName}!`)
      return
    }
    winsCount += 1
  }
  console.log(`Congratulations, ${userName}!`)
}

const play = async (game) => {
  console.log('Welcome to the Brain Games!')
  const userName = await greeting()
  playGame(userName, game)
}

export default (gameName) => {
  let game
  if (gameName === 'even') {
    game = brainEven
  } else if (gameName === 'calc') {
    game = brainCalc
  } else {
    throw new Error('Game is not defined')
  }
  play(game)
}
