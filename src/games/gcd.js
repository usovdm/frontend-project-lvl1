import { getRandomOf } from '../utils.js'

const getGcd = (number1, number2) => {
  let smaller
  let greater

  if (number1 > number2) {
    smaller = number2
    greater = number1
  } else {
    smaller = number1
    greater = number2
  }

  for (let i = 1; i <= smaller; i += 1) {
    const divisor = smaller / i
    if (divisor % 1 === 0 && greater % divisor === 0) {
      return divisor
    }
  }

  return NaN
}

const getQuestion = () => {
  const divisor = getRandomOf(10)
  const number1 = divisor * (getRandomOf(25))
  const number2 = divisor * (getRandomOf(25))

  const question = `${number1} ${number2}`
  const correctAnswer = getGcd(number1, number2)

  return {
    question,
    correctAnswer,
  }
}

const parseUserAnswer = (answer) => parseInt(answer, 10)

export default {
  instructions: 'Find the greatest common divisor of given numbers.',
  getQuestion,
  parseUserAnswer,
}
