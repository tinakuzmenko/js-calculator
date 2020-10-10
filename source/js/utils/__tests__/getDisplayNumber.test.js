import { getDisplayNumber } from '../getDisplayNumber';

describe('getDisplayNumber', () => {
  it('getDisplayNumber should return string', () => {
    expect(typeof getDisplayNumber(12)).toBe('string');
  });

  it('getDisplayNumber should return empty string is value is NaN', () => {
    expect(getDisplayNumber('{}')).toBe('');
  });

  it('getDisplayNumber should return string from integer number', () => {
    expect(getDisplayNumber(12)).toBe('12');
  });

  it('getDisplayNumber should return string from number with decimals', () => {
    expect(getDisplayNumber(12.2)).toBe('12.2');
  });
});
