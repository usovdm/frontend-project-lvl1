import promptly from 'promptly'

const greeting = async () => {
  const question = 'May I have your name? '
  const name = await promptly.prompt(question)
  console.log(`Hello, ${name}!`)
  return name
}

export default greeting
