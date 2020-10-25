import { getRandom } from '../utils.js';
import playGame from '../index.js';

const getGcd = (number1, number2) => {
  const smaller = Math.min(number1, number2);
  const greater = Math.max(number1, number2);

  for (let i = 1; i <= smaller; i += 1) {
    const divisor = smaller / i;
    if (divisor % 1 === 0 && greater % divisor === 0) {
      return divisor;
    }
  }

  throw new Error('Unexpected arguments has been passed');
};

const getQuestion = () => {
  const divisor = getRandom(1, 10);
  const number1 = divisor * getRandom(1, 25);
  const number2 = divisor * getRandom(1, 25);

  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame({
  instructions: 'Find the greatest common divisor of given numbers.',
  getQuestion,
});
