import promptly from 'promptly';

const WINS_LIMIT = 3;

export default async (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const { instructions, getQuestion } = game;

  let winsCount = 0;
  console.log(instructions);

  while (winsCount < WINS_LIMIT) {
    const { question, correctAnswer } = getQuestion();
    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt(`Question: ${question}`);
    console.log(`Your answer: ${answer}!`);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(.`,
        `Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    winsCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
