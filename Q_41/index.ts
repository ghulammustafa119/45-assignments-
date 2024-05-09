/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
let magician: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function show_magicians(magicians: string[]) {
    magician.forEach(names => console.log(names));
}
show_magicians(magician);