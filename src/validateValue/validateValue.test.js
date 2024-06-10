const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('Validate value correct', () => {
        expect(validateValue(59)).toBe(true);
    });

    test('Validate value incorrect', () => {
        expect(validateValue(120)).toBe(false);
    });
});
