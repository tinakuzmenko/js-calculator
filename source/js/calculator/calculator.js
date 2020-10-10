import { TRIGONOMETRIC_OPERATIONS } from '../utils/constants.js';
import { getDisplayNumber } from '../utils/getDisplayNumber';
import { computeMathOperations } from '../utils/computeMathOperations';
import { computeTrigonometricOperations } from '../utils/computeTrigonometricOperations';

export default class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.memory = 0;
    this.clear();
  }

  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
  }

  saveToMemory() {
    this.memory = parseFloat(this.currentOperand);
  }

  addToMemory() {
    this.memory += parseFloat(this.currentOperand);
  }

  showMemory() {
    this.currentOperand = this.memory;
  }

  clearMemory() {
    this.memory = 0;
    this.currentOperand = this.memory;
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;

    this.operation = operation;

    if (
      !this._checkIsTrigonometric(this.operation) &&
      this.currentOperand !== ''
    ) {
      this.compute('math');
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }

    if (this._checkIsTrigonometric(this.operation)) {
      this.compute('trigonometric');
    }
  }

  compute(computeType) {
    const current = parseFloat(this.currentOperand);

    if (isNaN(current)) return;

    if (computeType === 'math') {
      const prev = parseFloat(this.previousOperand);

      if (isNaN(prev)) return;

      this._computeMath(prev, current);
    }

    if (computeType === 'trigonometric') {
      this._computeTrigonometric(current);
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = getDisplayNumber(
      this.currentOperand,
    );

    if (!this._checkIsTrigonometric(this.operation)) {
      this.previousOperandTextElement.innerText = `${getDisplayNumber(
        this.previousOperand,
      )} ${this.operation || ''}`;
      return;
    }

    this.previousOperandTextElement.innerText = '';
  }

  _checkIsTrigonometric(operation) {
    return TRIGONOMETRIC_OPERATIONS.includes(operation);
  }

  _computeMath(prev, current) {
    this.currentOperand = computeMathOperations(this.operation, prev, current);
    this.operation = undefined;
    this.previousOperand = '';
  }

  _computeTrigonometric(current) {
    this.currentOperand = computeTrigonometricOperations(
      this.operation,
      current,
    );
  }
}
