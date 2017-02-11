// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);


var person = ['Antoine', 25];
var personTwo = ['Jen', 29];
//Hi Antoine, you are 25

function greet (name, age) {
  return ('Hi ' + name + ', you are ' + age);
}

console.log(greet(...person));
console.log(greet(...personTwo));


var names = ['Mike', 'Ben'];
var final = ['Antoine', ...names];

function greetTwo (final) {
  var doubled = final.map((name) => {
    console.log('Hi ' + name);
  });
}

greetTwo(final);
