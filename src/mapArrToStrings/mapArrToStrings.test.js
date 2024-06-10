const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('mapArrToStrings correct', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });

    test('mapArrToStrings correct with string', () => {
        expect(mapArrToStrings([1, 2, '3'])).toEqual(['1', '2']);
    });

    test('mapArrToStrings incorrect', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
    });
});
