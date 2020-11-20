import promptly from 'promptly';

const WINS_LIMIT = 3;

const greeting = async () => {
  const question = 'May I have your name? ';
  const name = await promptly.prompt(question);
  console.log(`Hello, ${name}!`);
  return name;
};

const playRound = async (question, correctAnswer) => {
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
    const { question, correctAnswer } = getQuestion();
    // eslint-disable-next-line no-await-in-loop
    const roundIsWon = await playRound(question, correctAnswer);
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
