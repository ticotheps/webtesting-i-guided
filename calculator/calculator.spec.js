const { add } = require('./calculator.js');

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

// test case
it('should add 2 numbers correctly', () => {
    expect(add(2, 2)).toBe(4);
});

// should return the passed value, if only one value provided
// 1 + undefined = undefined
it('should return the passed value, if only one value provided', () => {
    expect(add(1)).toBe(1);
    expect(add(99)).toBe(99);
});

// should calculate the sum of any number of arguments separated by a comma
it('should calculate the sum of any number of arguments separated by a comma', () => {
    expect(add(1, 2, 3)).toBe(6);
    expect(add(1, 2, 3, 4)).toBe(10);
});

// should handle an array of numbers
it('should handle an array of numbers', () => {
    expect(add([1, 2, 3])).toBe(6);
    expect(add([1, 2, 3, 4])).toBe(10);
});

// create some todos for yourself to show up in the console
// to help remember what other tests you'd like to try
it.todo('pass in a string');
it.todo('pass in null');
it.todo('pass in an array');

function honest() {
    return true;
}

test('an honest function should always tell the truth', () => {
    expect(honest()).toBeTruthy();
});

//-----------NOTES FROM VIDEO--------------

// describe('math.js', () => {
//     describe('add()', () => {

//         test('adds two numbers correctly', () => {
//             expect(add(2, 2)).toBe(4); 
//             expect(add(1, 3)).toBe(4); 
//             expect(add(-1, 3)).toBe(2); 
//             expect(add(0, 0)).toBe(0);
//         });

//         it('add() should return null when arguments are not numbers', () => {
//             expect(add()).toBeNull();
//             expect(add(1)).toBeNull();
//             expect(add(null, 1)).toBeNull();
//             expect(add(undefined, 1)).toBeNull();
//             expect(add(3, '4')).toBeNull();
//             expect(add({}, '4')).toBeNull();
//             expect(add([], '4')).toBeNull();
//             expect(add(NaN, '4')).toBeNull();
//         });
//     });
// });

