import { getRandom } from '../utils.js';
import playGame from '../index.js';

const answerVariants = {
  yes: 'yes',
  no: 'no',
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const boolToAnswer = (bool) => (bool ? answerVariants.yes : answerVariants.no);

const getQuestion = () => {
  const number = getRandom(1, 100);

  const question = number.toString();
  const correctAnswer = boolToAnswer(isPrime(number));

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame({
  instructions: `Answer "${answerVariants.yes}" if given number is prime. Otherwise answer "${answerVariants.no}".`,
  getQuestion,
});
