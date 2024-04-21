/*
Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
let magicians = ["David Copperfield", "Doug Henning", "Penn Jillette", "Teller"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The great ${magicians[i]}`;
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianArray = copyArray(magicians);
make_great(copymagicianArray);
console.log(`\nOriginal Magicians:\n`);
show_magicians(magicians);
console.log(`\nThe Great Magicians:\n`);
show_magicians(copymagicianArray);
export {};
