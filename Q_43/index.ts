/*
Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
let magician: string[] = ["Mustafa", "Bhutto", "Mujtaba", "Nayab"];

function show_magicians(magicians: string[]) {
    magicians.forEach(names => console.log(names));
  }
function make_great(magicians:string[]){
  return  magicians.map(names => `The great ${names}`);
}
let magiciansCopy = magician.slice();
 let modifiedArr = make_great(magiciansCopy);

 console.log(`\nthis is origional array:\n`);
 show_magicians(magician);

 console.log(`\nthis is modified 'the great' added array:\n`);
 show_magicians(modifiedArr);