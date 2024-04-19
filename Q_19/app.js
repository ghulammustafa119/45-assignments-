let guest = ["Ghulam Murtaza", "Shahid Ali", "Sohail"];
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear Mr.${guest[i]},\nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// Modified list ,replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(`"unfortunately ${guest[2]},can't come to dinner"`);
guest[2] = "Abdul Hadi";
console.log("\nNew List of Invitation\n");
// second set of invitation messages printing.
for (let j = 0; j < guest.length; j++) {
    console.log(`Dear Mr.${guest[j]}, \nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// found a bigger dinner table.
console.log("Good news! We've found a bigger dinner table, So more space is available.So our new guests are:\n");
// new guests in my array list.
guest.unshift("Ashfaque Ahmed");
guest.splice(2, 0, "Manzoor Ali");
guest.push("Azaad");
//new set of invitation messages,one of each person.
for (let k = 0; k < guest.length; k++) {
    console.log(`Dear Mr.${guest[k]}, \nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// Not found a bigger dinner table.
console.log("Sorry!we can not arrange big table,only two peoples wil be invited.\n");
// Removed guests.
while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`Sorry Mr.${removedGuest},you are not invited to dinner.`);
}
// Two remaining guests invited.
for (let l = 0; l < guest.length; l++) {
    console.log(`Dear Mr.${guest[l]}, \nyor are still invited.\nThank you!\n`);
}
// Emptying the array list.
guest.splice(0, guest.length);
console.log(guest);
/*
Dinner Guests: Working with one of the programs from Exercises 14 through 17, print a message indicating the number of people you are inviting to dinner.
*/
console.log(`Total number of guests they were invited to dinner: 7`);
export {};
