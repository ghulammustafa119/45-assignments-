
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let str1 : string = 'Ghulam Mustafa';
let str2 : string = 'Bhutto';
let num1 : number = 5;
let num2 : number = 10;
let myArr: number[] = [1,2,3,4,5];

// • Tests for equality and inequality with strings
console.log ("Tests for equality and inequality with strings:");
console.log(str1 ==='Ghulam Mustafa');
console.log(str1 === str2);

// • Tests using the lower case function
console.log ("\nTests using the lower case function:");
console.log(str1.toLowerCase() === 'ghulam mustafa');
console.log(str2.toLowerCase() !== 'bhutto');

// • Numerical tests 
console.log ("\nNumerical tests:");
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);

// • Tests using "and" and "or" operator
console.log ("\nTests using \"and\" and \"or\" operator:");
console.log(num1 < 10 && num2 > 5);
console.log(num1 < 3 || num2 > 15);

// • Test whether an item is in a array
console.log ("\nTest whether an item is in a array:");
console.log(myArr.includes(3));
console.log(myArr.includes(6));

// • Test whether an item is not in a array
console.log ("\nTest whether an item is not in a array:");
console.log(!myArr.includes(6));
console.log(!myArr.includes(2));