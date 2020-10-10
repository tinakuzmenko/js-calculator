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

export const computeTheResult = (operation, prev, current) => {
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

export const computeTrigonometricFunction = (operation, current) => {
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

export const getDisplayNumber = number => {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];

  let integerDisplay;

  if (isNaN(integerDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = integerDigits.toLocaleString('en', {
      maximumFractionDigits: 0,
    });
  }

  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
};
