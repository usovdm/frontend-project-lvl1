import promptly from 'promptly'
import greeting from '../bin/cli.js'
import brainEven from './games/even.js'
import brainCalc from './games/calc.js'
import brainGcd from './games/gcd.js'
import brainProgression from './games/progression.js'

const WINS_LIMIT = 3

const playRound = async (getQuestion, parseUserAnswer) => {
  const { question, correctAnswer } = getQuestion()

  const answer = await promptly.prompt(`Question: ${question}`)
  const formattedUserAnswer = parseUserAnswer(answer)
  console.log(`Your answer: ${formattedUserAnswer}!`)

  const result = formattedUserAnswer === correctAnswer

  if (result) {
    console.log('Correct!')
  } else {
    console.log(
      `'${formattedUserAnswer}' is wrong answer ;(.`,
      `Correct answer was '${correctAnswer}'.`,
    )
  }

  return result
}

const playGame = async (userName, game) => {
  const { instructions, getQuestion, parseUserAnswer } = game

  let winsCount = 0
  console.log(instructions)

  while (winsCount < WINS_LIMIT) {
    // eslint-disable-next-line no-await-in-loop
    const roundIsWon = await playRound(getQuestion, parseUserAnswer)
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
  } else if (gameName === 'gcd') {
    game = brainGcd
  } else if (gameName === 'progression') {
    game = brainProgression
  } else {
    throw new Error('Game is not defined')
  }
  play(game)
}
