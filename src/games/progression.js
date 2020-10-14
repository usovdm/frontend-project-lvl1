import { getRandom } from '../utils.js'

const getProgressionWithHiddenNumber = () => {
  const countOfItems = getRandom(5, 15)
  const hiddenIndex = getRandom(0, countOfItems - 1)
  const startNumber = getRandom(1, 20)
  const stepNumber = getRandom(1, 10)

  const progressionNumbers = []
  let hiddenNumber
  for (let i = 0; i <= countOfItems - 1; i += 1) {
    const number = startNumber + stepNumber * i
    if (i === hiddenIndex) {
      hiddenNumber = number
      progressionNumbers.push('..')
    } else {
      progressionNumbers.push(number)
    }
  }

  return {
    progressionNumbers,
    hiddenNumber,
  }
}

const getQuestion = () => {
  const { progressionNumbers, hiddenNumber: correctAnswer } = getProgressionWithHiddenNumber()
  const question = progressionNumbers.join(' ')

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
