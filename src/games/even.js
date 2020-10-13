import { getRandomOf } from '../utils.js'

const YES = 'yes'
const NO = 'no'

const isEven = (number) => number % 2 === 0

const boolToAnswer = (bool) => (bool ? YES : NO)

const getQuestion = () => {
  const number = getRandomOf(100)

  const question = `${number}`
  const correctAnswer = boolToAnswer(isEven(number))

  return {
    question,
    correctAnswer,
  }
}

const parseUserAnswer = (answer) => boolToAnswer(answer === YES)

export default {
  instructions: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion,
  parseUserAnswer,
}
