import { getRandom } from '../utils.js';
import playGame from '../index.js';

const getRandomProgressionArguments = () => {
  const countOfItems = getRandom(5, 15);
  const hiddenIndex = getRandom(0, countOfItems - 1);
  const start = getRandom(1, 20);
  const step = getRandom(1, 10);

  return {
    start, countOfItems, step, hiddenIndex,
  };
};

const getProgressionWithHiddenNumber = (start, countOfItems, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i <= countOfItems - 1; i += 1) {
    const number = start + step * i;
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(number);
    }
  }

  return {
    progression,
    hiddenNumber: start + step * hiddenIndex,
  };
};

const getQuestion = () => {
  const {
    start, countOfItems, step, hiddenIndex,
  } = getRandomProgressionArguments();
  const {
    progression,
    hiddenNumber: correctAnswer,
  } = getProgressionWithHiddenNumber(start, countOfItems, step, hiddenIndex);
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

const parseUserAnswer = (answer) => parseInt(answer, 10);

export default () => playGame({
  instructions: 'What number is missing in the progression?',
  getQuestion,
  parseUserAnswer,
});
