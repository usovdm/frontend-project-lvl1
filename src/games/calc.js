import { getRandom } from '../utils.js';
import playGame from '../index.js';

const signs = {
  plus: '+',
  minus: '-',
  multiply: '*',
};

const getRandomValue = (object) => {
  const keys = Object.keys(object);
  const randomKey = keys[getRandom(0, keys.length - 1)];
  return object[randomKey];
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
  const sign = getRandomValue(signs);
  const number2 = sign === signs.multiply ? getRandom(1, 10) : getRandom(1, 100);

  const question = `${number1} ${sign} ${number2} = `;
  const correctAnswer = calculate(number1, number2, sign).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame({
  instructions: 'What is the result of the expression?.',
  getQuestion,
});
