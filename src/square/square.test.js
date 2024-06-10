const square = require('./square');

describe('square', () => {
    let mockValue;

    // Before each test
    beforeEach(() => {

    });

    // Only once before all tests
    beforeAll(() => {

    });

    test('square correct', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();

        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    // After each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    // Only once after all tests
    afterAll(() => {

    });

});
