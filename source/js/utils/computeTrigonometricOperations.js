export const computeTrigonometricOperations = (operation, current) => {
  switch (operation) {
    case 'sin':
      return Math.sin(current);
    case 'cos':
      return Math.cos(current);
    case 'tg':
      return Math.tan(current);
    case 'ctg':
      return 1 / Math.tan(current);
    default:
      return;
  }
};
