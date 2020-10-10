export const computeMathOperations = (operation, prev, current) => {
  switch (operation) {
    case '+':
      return prev + current;
    case '-':
      return prev - current;
    case '*':
      return prev * current;
    case '÷':
      return prev / current;
    default:
      return;
  }
};
