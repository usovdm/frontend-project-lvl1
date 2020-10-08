import promptly from 'promptly'

export const greeting = async () => {
    const question = 'May I have your name? '
    const name = await await promptly.prompt(question);

    return `Hello, ${name}!`
}
