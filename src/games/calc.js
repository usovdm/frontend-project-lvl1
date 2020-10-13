import { getRandomOf } from '../utils.js'

const PLUS = '+'
const MINUS = '-'
const MULTIPLY = '*'
const signs = [
  PLUS,
  MINUS,
  MULTIPLY,
]

const getRandomSign = () => signs[getRandomOf(signs.length) + 1]

const calculate = (number1, number2, sign) => {
  if (sign === PLUS) {
    return number1 + number2
  }
  if (sign === MINUS) {
    return number1 - number2
  }
  if (sign === MULTIPLY) {
    return number1 * number2
  }
  return null
}

const getQuestion = () => {
  const number1 = getRandomOf(100)
  const sign = getRandomSign()
  const number2 = sign === MULTIPLY ? getRandomOf(10) : getRandomOf(100)

  const question = `${number1} ${sign} ${number2} = `
  const correctAnswer = calculate(number1, number2, sign)

  return {
    question,
    correctAnswer,
  }
}

const parseUserAnswer = (answer) => parseInt(answer, 10)

export default {
  instructions: 'What is the result of the expression?.',
  getQuestion,
  parseUserAnswer,
}
