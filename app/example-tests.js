console.log('Starting tests!');

function add (a, b) {
  return a + b;
}

expect(add(3, 5)).toBe(8);
expect(add(-3, 2)).toBeA('number');

function capitalizeWord(word) {
  if(!word || typeof word !== 'string') {
    word = '';
  }
  
  return word.charAt(0).toUpperCase() + word.slice(1);
}


// Given 'andrew' expect Andrew with capital 'A'
expect(capitalizeWord('andrew')).toBe('Andrew');

// Given andrew expect type to be 'string'
expect(capitalizeWord('andrew')).toBeA('string');

// Given nothing expect ''
expect(capitalizeWord()).toBe('');

console.log('All tests have passed');


