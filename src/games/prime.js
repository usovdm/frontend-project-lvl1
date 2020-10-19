import { getRandom } from '../utils.js'

const YES = 'yes'
const NO = 'no'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const boolToAnswer = (bool) => (bool ? YES : NO)

const getQuestion = () => {
  const number = getRandom(1, 100)

  const question = number.toString()
  const correctAnswer = boolToAnswer(isPrime(number))

  return {
    question,
    correctAnswer,
  }
}

const parseUserAnswer = (answer) => boolToAnswer(answer === YES)

export default {
  instructions: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion,
  parseUserAnswer,
}
