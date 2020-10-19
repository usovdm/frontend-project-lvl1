import { getRandom } from '../utils.js'

const getRandomProgressionArguments = () => {
  const countOfItems = getRandom(5, 15)
  const hiddenIndex = getRandom(0, countOfItems - 1)
  const startNumber = getRandom(1, 20)
  const stepNumber = getRandom(1, 10)

  return {
    startNumber, countOfItems, stepNumber, hiddenIndex,
  }
}

const getProgressionWithHiddenNumber = (startNumber, countOfItems, stepNumber, hiddenIndex) => {
  const progressionNumbers = []
  for (let i = 0; i <= countOfItems - 1; i += 1) {
    const number = startNumber + stepNumber * i
    if (i === hiddenIndex) {
      progressionNumbers.push('..')
    } else {
      progressionNumbers.push(number)
    }
  }

  return {
    progressionNumbers,
    hiddenNumber: startNumber + stepNumber * hiddenIndex,
  }
}

const getQuestion = () => {
  const {
    startNumber, countOfItems, stepNumber, hiddenIndex,
  } = getRandomProgressionArguments()
  const {
    progressionNumbers,
    hiddenNumber: correctAnswer,
  } = getProgressionWithHiddenNumber(startNumber, countOfItems, stepNumber, hiddenIndex)
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
