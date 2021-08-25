import operate from '../logic/operate';

describe('operate', () => {
  test('1 + 2 to return 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('1 - 3 should return -2', () => {
    expect(operate(1, 3, '-')).toBe('-2');
  });

  test('4 ÷ 2 should return 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('3 x 2 should return 6', () => {
    expect(operate(3, 2, 'x')).toBe('6');
  });

  test('6 % 2 should return 0', () => {
    expect(operate(6, 2, '%')).toBe('0');
  });

  test('Should throw an error if a wrong operator is used', () => {
    expect(() => operate(1, 1, '++')).toThrowError(/Unknown operation/);
  });
});
