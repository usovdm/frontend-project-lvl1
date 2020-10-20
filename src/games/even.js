import { getRandom } from '../utils.js';
import playGame from '../index.js';

const YES = 'yes';
const NO = 'no';

const isEven = (number) => number % 2 === 0;

const boolToAnswer = (bool) => (bool ? YES : NO);

const getQuestion = () => {
  const number = getRandom(1, 100);

  const question = number.toString();
  const correctAnswer = boolToAnswer(isEven(number));

  return {
    question,
    correctAnswer,
  };
};

const parseUserAnswer = (answer) => boolToAnswer(answer === YES);

export default () => playGame({
  instructions: `Answer "${YES}" if the number is even, otherwise answer "${NO}".`,
  getQuestion,
  parseUserAnswer,
});
