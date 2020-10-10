#!/usr/bin/env node
import promptly from 'promptly'
import greeting from './cli.js'

const WINS_LIMIT = 3
const YES = 'yes'
const NO = 'no'

const getRandomOf100 = () => Math.round(Math.random() * 100)

const isEven = (number) => number % 2 === 0

const answerToBool = (answer) => answer === YES
const boolToAnswer = (bool) => (bool ? YES : NO)

const playRound = async () => {
  const number = getRandomOf100()
  const question = `Question: ${number}`
  const answer = await promptly.prompt(question)
  console.log(`Your answer: ${answer}!`)

  const answerBool = answerToBool(answer)
  const result = answerBool === isEven(number)

  if (result) {
    console.log('Correct!')
  } else {
    console.log(
      `'${boolToAnswer(answerBool)}' is wrong answer ;(.`,
      `Correct answer was '${boolToAnswer(!answerBool)}'.`,
    )
  }

  return result
}

const playGame = async (userName) => {
  let winsCount = 0
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (winsCount < WINS_LIMIT) {
    // eslint-disable-next-line no-await-in-loop
    const roundIsWon = await playRound()
    if (!roundIsWon) {
      console.log(`Let's try again, ${userName}!`)
      return
    }
    winsCount += 1
  }
  console.log(`Congratulations, ${userName}!`)
}

const main = async () => {
  console.log('Welcome to the Brain Games!')
  const userName = await greeting()
  playGame(userName)
}

main()
