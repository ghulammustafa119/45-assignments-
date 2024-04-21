/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
*/
let magicians:string[] = ["Ali", "Hamza", "Hassan", "Saleem"];

function make_great(magiciansArray:string[]){
    for(let value of magiciansArray){
      magiciansArray[magiciansArray.indexOf(value)] = `The Great ${value}`
    }
}
function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => console.log(magician));
  }
  make_great(magicians);
  show_magicians(magicians);