const PLUS = '+'
const MINUS = '-'
const MULTIPLY = '*'
const signs = [
  PLUS,
  MINUS,
  MULTIPLY,
]

const getRandomOf = (n = 100) => Math.round(Math.random() * n)
const getRandomSign = () => signs[Math.floor(Math.random() * signs.length)]

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
  const question = `Question: ${number1} ${sign} ${number2} = `
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
