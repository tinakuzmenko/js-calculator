import { TRIGONOMETRIC_OPERATIONS } from '../helpers/constants.js';
import {
  computeTheResult,
  computeTrigonometricFunction,
  getDisplayNumber,
} from '../helpers/utils';

export default class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.memory = 0;
    this.displayTrigonometric = '';
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
      !this.checkIsTrigonometric(this.operation) &&
      this.currentOperand !== ''
    ) {
      this.compute('math');
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }

    if (this.checkIsTrigonometric(this.operation)) {
      this.previousOperand = this.currentOperand;
      this.compute('trigonometric');
      this.displayTrigonometric = `${this.operation}(${this.previousOperand}) =`;
      this.previousOperand = getDisplayNumber(this.currentOperand);
    }
  }

  compute(computeType) {
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(current)) return;

    if (computeType === 'math') {
      if (isNaN(prev)) return;
      this.currentOperand = computeTheResult(this.operation, prev, current);
      this.operation = undefined;
      this.previousOperand = '';
    }

    if (computeType === 'trigonometric') {
      this.previousOperand = current;
      this.currentOperand = computeTrigonometricFunction(
        this.operation,
        current,
      );
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = getDisplayNumber(
      this.currentOperand,
    );

    if (this.operation != null && !this.checkIsTrigonometric(this.operation)) {
      this.previousOperandTextElement.innerText = `${getDisplayNumber(
        this.previousOperand,
      )} ${this.operation}`;
      return;
    }

    if (this.checkIsTrigonometric(this.operation)) {
      this.previousOperandTextElement.innerText = this.displayTrigonometric;
      return;
    }

    this.previousOperandTextElement.innerText = '';
  }

  checkIsTrigonometric(operation) {
    return TRIGONOMETRIC_OPERATIONS.includes(operation);
  }
}
