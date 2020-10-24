import { getRandom } from '../utils.js';
import playGame from '../index.js';

const signs = {
  plus: '+',
  minus: '-',
  multiply: '*',
};

const getRandomSign = () => {
  const signsKeys = Object.keys(signs);
  const randomSignKey = signsKeys[getRandom(0, signsKeys.length - 1)];
  return signs[randomSignKey];
};

const calculate = (number1, number2, sign) => {
  if (sign === signs.plus) {
    return number1 + number2;
  }
  if (sign === signs.minus) {
    return number1 - number2;
  }
  if (sign === signs.multiply) {
    return number1 * number2;
  }

  throw new Error('Unexpected operation has been called');
};

const getQuestion = () => {
  const number1 = getRandom(1, 100);
  const sign = getRandomSign();
  const number2 = sign === signs.multiply ? getRandom(1, 10) : getRandom(1, 100);

  const question = `${number1} ${sign} ${number2} = `;
  const correctAnswer = calculate(number1, number2, sign);

  return {
    question,
    correctAnswer,
  };
};

const parseUserAnswer = (answer) => parseInt(answer, 10);

export default () => playGame({
  instructions: 'What is the result of the expression?.',
  getQuestion,
  parseUserAnswer,
});
