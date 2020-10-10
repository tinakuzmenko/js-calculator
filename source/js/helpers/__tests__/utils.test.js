import { computeTheResult, computeTrigonometricFunction } from '../utils';

describe('computeTheResult', () => {
  it('Apply should work correctly', () => {
    expect(typeof computeTheResult('+', 0, 0)).toBe('number');
    expect(computeTheResult('+', 0, 0)).toEqual(0);
    expect(computeTheResult('+', 2, 2)).toEqual(4);
  });

  it('Substract should work correctly', () => {
    expect(typeof computeTheResult('-', 10, 5)).toBe('number');
    expect(computeTheResult('-', 10, 5)).toEqual(5);
    expect(computeTheResult('-', 0, 5)).toEqual(-5);
  });

  it('Multiply should work correctly', () => {
    expect(typeof computeTheResult('*', 2, 5)).toBe('number');
    expect(computeTheResult('*', 2, 5)).toEqual(10);
    expect(computeTheResult('*', 0, 5)).toEqual(0);
  });

  it('Divide should work correctly', () => {
    expect(typeof computeTheResult('÷', 10, 5)).toBe('number');
    expect(computeTheResult('÷', 10, 5)).toEqual(2);
    expect(computeTheResult('÷', 0, 5)).toEqual(0);
    expect(computeTheResult('÷', 5, 0)).toEqual(Infinity);
  });

  it('Default should return from function', () => {
    expect(computeTheResult(':', 10, 5)).toBeUndefined();
  });
});

describe('computeTrigonometricFunction', () => {
  it('Sin should work correctly', () => {
    expect(typeof computeTrigonometricFunction('sin', 1)).toBe('number');
    expect(computeTrigonometricFunction('sin', 1)).toBeCloseTo(0.8414709848);
  });
});
