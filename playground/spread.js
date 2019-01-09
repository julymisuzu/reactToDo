// function add(a, b) {
//   return a + b;
// }


// console.log(add(1, 2));


// var toAdd = [9, 5];
// console.log(add(...toAdd));


// var groupA = ['John', 'Maria'];
// var groupB = ['Ron'];
// var final = [...groupA, ...groupB];

// console.log(final);


var person = ['John', 35];
var personTwo = ['Maria', 20];

function greeting(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greeting(...person);
greeting(...personTwo);


var names = ['John', 'Mike', 'Ben'];
var final = [...names, 'Juh'];

final.forEach((person) => {
  console.log('Hi ' + person);
})
