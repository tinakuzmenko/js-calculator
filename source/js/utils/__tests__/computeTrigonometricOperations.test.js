import { computeTrigonometricOperations } from '../computeTrigonometricOperations';

describe('computeTrigonometricOperations', () => {
  it('Sin should work correctly', () => {
    expect(typeof computeTrigonometricOperations('sin', 1)).toBe('number');
    expect(computeTrigonometricOperations('sin', 0)).toEqual(0);
    expect(computeTrigonometricOperations('sin', 1)).toBeCloseTo(0.84);
  });

  it('Сosine should work correctly', () => {
    expect(typeof computeTrigonometricOperations('cos', 0)).toBe('number');
    expect(computeTrigonometricOperations('cos', 0)).toEqual(1);
    expect(computeTrigonometricOperations('cos', 5)).toBeCloseTo(0.28);
  });

  it('Tangent should work correctly', () => {
    expect(typeof computeTrigonometricOperations('tg', 0)).toBe('number');
    expect(computeTrigonometricOperations('tg', 0)).toEqual(0);
    expect(computeTrigonometricOperations('tg', 5)).toBeCloseTo(-3.38);
  });

  it('Cotangent should work correctly', () => {
    expect(typeof computeTrigonometricOperations('ctg', 0)).toBe('number');
    expect(computeTrigonometricOperations('ctg', 0)).toEqual(Infinity);
    expect(computeTrigonometricOperations('ctg', 1)).toBeCloseTo(0.64);
  });

  it('Default should return from function', () => {
    expect(computeTrigonometricOperations('square', 23)).toBeUndefined();
  });
});
