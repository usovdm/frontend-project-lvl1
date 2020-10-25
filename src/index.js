import promptly from 'promptly';
import greeting from './greeting.js';

const WINS_LIMIT = 3;

const playRound = async ({ question, correctAnswer }) => {
  const answer = await promptly.prompt(`Question: ${question}`);
  console.log(`Your answer: ${answer}!`);

  const result = answer === correctAnswer;

  if (result) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(.`,
      `Correct answer was '${correctAnswer}'.`,
    );
  }

  return result;
};

const playGame = async (userName, game) => {
  const { instructions, getQuestion } = game;

  let winsCount = 0;
  console.log(instructions);

  while (winsCount < WINS_LIMIT) {
    // eslint-disable-next-line no-await-in-loop
    const roundIsWon = await playRound(getQuestion());
    if (!roundIsWon) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    winsCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default async (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = await greeting();
  playGame(userName, game);
};
