import promptly from 'promptly'

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

const playRound = async () => {
  const number1 = getRandomOf(100)
  const sign = getRandomSign()
  const number2 = sign === MULTIPLY ? getRandomOf(10) : getRandomOf(100)
  const question = `Question: ${number1} ${sign} ${number2} = `
  const answer = await promptly.prompt(question)
  console.log(`Your answer: ${answer}!`)

  const answerInt = parseInt(answer, 10)
  const correctAnswer = calculate(number1, number2, sign)
  const result = answerInt === correctAnswer

  if (result) {
    console.log('Correct!')
  } else {
    console.log(
      `'${answer}' is wrong answer ;(.`,
      `Correct answer was '${correctAnswer}'.`,
    )
  }

  return result
}

export default {
  instructions: 'What is the result of the expression?.',
  playRound,
}
