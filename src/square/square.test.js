const square = require('./square')

describe('square', () => {
  test('Корректное значение', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(9)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1)
  })

  test('Вызов Math.pow не произошел', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    jest.clearAllMocks();
  })
})
