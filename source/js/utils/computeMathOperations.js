function fixDecimal(a) {
  return (parseFloat(number).toPrecision(12));
}

export const computeMathOperations = (operation, prev, current) => {
  switch (operation) {
    case '+':
      return fixDecimal(prev + current);
    case '-':
      return fixDecimal(prev - current);
    case '*':
      return fixDecimal(prev * current);
    case '÷':
      return fixDecimal(prev / current);
    default:
      return;
  }
};
