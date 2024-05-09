/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
*/
let magician = ["Mustafa", "Bhutto", "Mujtaba", "Nayab"];
function show_magicians(magicians) {
    magicians.forEach(names => console.log(names));
}
function make_great(magicians) {
    return magicians.map(names => `The great ${names}`);
}
let modifiedArr = make_great(magician);
show_magicians(modifiedArr);
export {};
