function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const operations = ['+', '-'];

const generateQuestion = () => {
  const starting = getRandomIntInclusive(1, 120);
  const operationIndex = getRandomIntInclusive(0, 1);
  const operation = operations[operationIndex];

  switch (operation) {
    case '+':
      return { starting, operation, amount: getRandomIntInclusive(1, 120 - starting)};
    case '-':
      return { starting, operation, amount: getRandomIntInclusive(1, starting - 1)};
    default:
      return { starting: 20, operation: '-', amount: 5 };
  }
};

const getAnswerFromQuestion = (question) => {
  const { operation, starting, amount } = question;
  return getAnswer(operation, starting, amount);
};

const getAnswer = (operation, ...params) => {
  switch (operation) {
    case '+':
      return params.reduce((acc, i) => acc + i);
    case '-':
      return params.reduce((acc, i) => acc - i);
    default:
      return 0;
  }
}

export {
  generateQuestion,
  getAnswer,
  getAnswerFromQuestion,
};