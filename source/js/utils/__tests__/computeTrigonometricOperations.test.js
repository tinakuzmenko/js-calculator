import { computeTrigonometricOperations } from '../computeTrigonometricOperations';

describe('computeTrigonometricOperations', () => {
  it('Sin should work correctly', () => {
    expect(typeof computeTrigonometricOperations('sin', 1)).toBe('number');
    expect(computeTrigonometricOperations('sin', 1)).toBeCloseTo(0.8414709848);
  });
});
