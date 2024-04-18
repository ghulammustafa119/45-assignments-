/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let personName = "ghulam mustaFA BHUtto";
console.log(`Name in uppercase : ${personName.toUpperCase()}`);
console.log(`Name in lowercase : ${personName.toLowerCase()}`);
// for titlecase
let step1 = personName.split(" ");
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
let step3 = step2.join(" ");
console.log(`Name in titlecase : ${step3}`);
export {};
