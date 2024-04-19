/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let car : string = 'subaru';

console.log ("\n----> 5 tests evaluate to true:")
//test no 1
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

//test no 2
console.log("is car != 'toyota'? I predict true.");
console.log(car != 'toyota');

//test no 3
console.log("is the length of car >4? I predict true.");
console.log(car.length > 4);

//test no 4
console.log("is the length of car <=6? I predict true.");
console.log(car.length <= 6);

//test no 5
console.log("does car start with 's'? I predict true.");
console.log(car.startsWith('s'));

console.log ("\n----> 5 tests evaluate to false:")
//test no 1
console.log("is car == 'Honda'? I predict false.");
console.log(car == 'Honda');

//test no 2
console.log("is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');

//test no 3
console.log("is car in uppercase? I predict false.");
console.log(car.toUpperCase()=== car);

//test no 4
console.log("is car == 'ford'? I predict false");
console.log(car == 'ford');

//test no 5
console.log("is car == 'cycle'? I predict false.");
console.log(car == 'cycle');