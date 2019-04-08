const { add } = require('./calculator.js');

describe('math.js', () => {
    describe('add()', () => {

        test('adds two numbers correctly', () => {
            expect(add(2, 2)).toBe(4); 
            expect(add(1, 3)).toBe(4); 
            expect(add(-1, 3)).toBe(2); 
        });

        it('add() should return null when arguments are not numbers', () => {
            expect(add()).toBeNull();
            expect(add(1)).toBeNull();
            expect(add(null, 1)).toBeNull();
            expect(add(undefined, 1)).toBeNull();
            expect(add(3, '4')).toBeNull();
            expect(add({}, '4')).toBeNull();
            expect(add([], '4')).toBeNull();
            expect(add(NaN, '4')).toBeNull();
        });
    });
});


//--------------Guided Lecture Notes----------------

// can add 2 and 2
// const sum = add(2, 2);

// console.log('The sum is: ', sum);

// // test case
// test('adds 2 and 2', function() {
//     // Arrange
//     const expected = 4;
//     const value1 = 2;
//     const value2 = 2;

//     // Act
//     const sum = add(value1, value2);

//     // Assert
//     expect(sum).toEqual(expected);
// });

it('should add 2 numbers correctly', () => {
    expect(add(2, 2)).toBe(4);
});

function honest() {
    return true;
}

test('an honest function should always tell the truth', () => {
    expect(honest()).toBeTruthy();
});