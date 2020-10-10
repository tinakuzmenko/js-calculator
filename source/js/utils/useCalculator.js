export const useCalculator = (target, calculator) => {
  switch (target.dataset.type) {
    case 'integer':
      if (
        calculator.previousOperand === '' &&
        calculator.currentOperand !== '' &&
        calculator.readyToReset
      ) {
        calculator.currentOperand = '';
        calculator.readyToReset = false;
      }

      calculator.appendNumber(target.innerText);
      break;
    case 'operation':
      calculator.chooseOperation(target.innerText);
      break;
    case 'trigonometric':
      calculator.chooseOperation(target.innerText);
      break;
    case 'equals':
      calculator.compute('math');
      break;
    case 'all-clear':
      calculator.clear();
      break;
    case 'memory-save':
      calculator.saveToMemory();
      break;
    case 'memory-add':
      calculator.addToMemory();
      break;
    case 'memory-show':
      calculator.showMemory();
      break;
    case 'memory-clear':
      calculator.clearMemory();
      break;
    default:
      return;
  }
};
