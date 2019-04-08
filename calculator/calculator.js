module.exports = {
  add,
};

function add(args) {

  const numbers = Array.isArray(args) ? args : Array.from(arguments);

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// args = arguments = an array-like object in JS

// 'Array.from(arguments)' creates a new array instance
// from an array-like object

// '.reduce()' takes two arguments, an accumulator
// and a number argument, which returns the accumulator
// PLUS the number as it iterates through all items in the
// array.


