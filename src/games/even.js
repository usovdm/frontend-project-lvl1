import { getRandom } from '../utils.js';
import playGame from '../index.js';

const answerVariants = {
  yes: 'yes',
  no: 'no',
};

const isEven = (number) => number % 2 === 0;

const boolToAnswer = (bool) => (bool ? answerVariants.yes : answerVariants.no);

const getQuestion = () => {
  const number = getRandom(1, 100);

  const question = number.toString();
  const correctAnswer = boolToAnswer(isEven(number));

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame({
  instructions: `Answer "${answerVariants.yes}" if the number is even, otherwise answer "${answerVariants.no}".`,
  getQuestion,
});
