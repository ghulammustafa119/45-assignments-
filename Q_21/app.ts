/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
interface student{
    name:string,
    age:number,
    gender:string,
    course:string,
}
let student = {
    name:"Ghulam Mustafa Bhutto",
    age:47,
    gender:"Male",
    course:"Artificial Intelligence"
}
console.log(`My name is: ${student.name}`);
console.log(`My age is: ${student.age}`);
console.log(`My gender is: ${student.gender}`);
console.log(`My course is: ${student.course}`);