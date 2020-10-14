import { getRandom } from '../utils.js'

const getQuestion = () => {
  const countOfItems = getRandom(5, 15)
  const hiddenIndex = getRandom(0, countOfItems - 1)
  const startNumber = getRandom(1, 20)
  const stepNumber = getRandom(1, 10)

  const numbers = []
  let correctAnswer
  for (let i = 0; i <= countOfItems - 1; i += 1) {
    const number = startNumber + stepNumber * i
    if (i === hiddenIndex) {
      correctAnswer = number
      numbers.push('..')
    } else {
      numbers.push(number)
    }
  }

  const question = numbers.join(' ')

  return {
    question,
    correctAnswer,
  }
}

const parseUserAnswer = (answer) => parseInt(answer, 10)

export default {
  instructions: 'What number is missing in the progression?',
  getQuestion,
  parseUserAnswer,
}
