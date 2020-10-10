import { computeMathOperations } from '../computeMathOperations';

describe('computeMathOperations', () => {
  it('Apply should work correctly', () => {
    expect(typeof computeMathOperations('+', 0, 0)).toBe('number');
    expect(computeMathOperations('+', 0, 0)).toEqual(0);
    expect(computeMathOperations('+', 2, 2)).toEqual(4);
  });

  it('Substract should work correctly', () => {
    expect(typeof computeMathOperations('-', 10, 5)).toBe('number');
    expect(computeMathOperations('-', 10, 5)).toEqual(5);
    expect(computeMathOperations('-', 0, 5)).toEqual(-5);
  });

  it('Multiply should work correctly', () => {
    expect(typeof computeMathOperations('*', 2, 5)).toBe('number');
    expect(computeMathOperations('*', 2, 5)).toEqual(10);
    expect(computeMathOperations('*', 0, 5)).toEqual(0);
  });

  it('Divide should work correctly', () => {
    expect(typeof computeMathOperations('÷', 10, 5)).toBe('number');
    expect(computeMathOperations('÷', 10, 5)).toEqual(2);
    expect(computeMathOperations('÷', 0, 5)).toEqual(0);
    expect(computeMathOperations('÷', 5, 0)).toEqual(Infinity);
  });

  it('Default should return from function', () => {
    expect(computeMathOperations(':', 10, 5)).toBeUndefined();
  });
});
