const YES = 'yes'
const NO = 'no'

const getRandomOf100 = () => Math.round(Math.random() * 100)

const isEven = (number) => number % 2 === 0

const boolToAnswer = (bool) => (bool ? YES : NO)

const getQuestion = () => {
  const number = getRandomOf100()
  const question = `Question: ${number}`
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
