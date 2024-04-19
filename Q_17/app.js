/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
let guest = ["Ghulam Murtaza", "Shahid Ali", "Sohail"];
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear Mr.${guest[i]},\nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// Modified list replacing the name of the guest who can't make it with the name of the new person inviting.
console.log(`"unfortunately ${guest[2]},can't come to dinner"`);
guest[2] = "Abdul Hadi";
console.log("\nNew List of Invitation\n");
// second set of invitation messages printing.
for (let j = 0; j < guest.length; j++) {
    console.log(`Dear Mr.${guest[j]}, \nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// found a bigger dinner table.
console.log("Good news! We've found a bigger dinner table, So more space is available.So our new guests are:\n");
// adding new guests to the list.
guest.unshift("Ashfaque Ahmed");
guest.splice(2, 0, "Manzoor Ali");
guest.push("Azaad");
// third set of invitation messages printing for each person.
for (let k = 0; k < guest.length; k++) {
    console.log(`Dear Mr.${guest[k]}, \nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// Not found a bigger dinner table.
console.log("Sorry!we can not arrange big table,only two people will be invited.\n");
// removing guests from the list.
while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`"unfortunately ${removedGuest}, can't come to dinner"`);
}
// Two remaining guests invited.
for (let l = 0; l < guest.length; l++) {
    console.log(`Dear Mr.${guest[l]}, \nyou are still invited.\nThank you!\n`);
}
//Removed all guests from array.
guest.splice(0, 2);
console.log(guest);
export {};
