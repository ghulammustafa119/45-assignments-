// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest : string[] = ["Ghulam Murtaza", "Shahid Ali", "Sohail"];
// for(let i =0; i<guest.length; i++) {
//     console.log(`Dear Mr.${guest[i]},\nit is our pleasure to invite you to dinner.\nThank you!\n`);
// }
let indicatingNumber:number = guest.length;
console.log(`we are inviting total ${indicatingNumber} guests.`);