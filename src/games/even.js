import promptly from 'promptly'

const YES = 'yes'
const NO = 'no'

const getRandomOf100 = () => Math.round(Math.random() * 100)

const isEven = (number) => number % 2 === 0

const answerToBool = (answer) => answer === YES
const boolToAnswer = (bool) => (bool ? YES : NO)

const playRound = async () => {
  const number = getRandomOf100()
  const question = `Question: ${number}`
  const answer = await promptly.prompt(question)
  console.log(`Your answer: ${answer}!`)

  const answerBool = answerToBool(answer)
  const result = answerBool === isEven(number)

  if (result) {
    console.log('Correct!')
  } else {
    console.log(
      `'${boolToAnswer(answerBool)}' is wrong answer ;(.`,
      `Correct answer was '${boolToAnswer(!answerBool)}'.`,
    )
  }

  return result
}

export default {
  instructions: 'Answer "yes" if the number is even, otherwise answer "no".',
  playRound,
}
