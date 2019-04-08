const { add } = require('./calculator.js');

describe('math.js', () => {
    describe('add()', () => {

        test('adds two numbers correctly', () => {
            expect(add(2, 2)).toBe(4); 
            expect(add(1, 3)).toBe(4); 
            expect(add(-1, 3)).toBe(2); 
        });

        // it('add() should return null when arguments are not numbers', () => {
        //     // expect(add()).toBeNull();
        //     // expect(add(1)).toBeNull();
        //     // expect(add(null, 1)).toBeNull();
        //     // expect(add(undefined, 1)).toBeNull();
        //     // expect(add(3, '4')).toBeNull();
        //     // expect(add({}, '4')).toBeNull();
        //     // expect(add([], '4')).toBeNull();
        //     // expect(add(NaN, '4')).toBeNull();
        // });
    });
});
