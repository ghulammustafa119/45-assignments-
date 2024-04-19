/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
let guest = ["ghulam Murtaza", "Shahid Ali", "Sohail"];
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear Mr.${guest[i]},\nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// Modified list replacing the name of the guest who cant make it with the name of the new person inviting.
console.log(`"unfortunately ${guest[2]},can't come to dinner"`);
guest[2] = "Abdul Hadi";
console.log("\nNew List of Invitation\n");
// second set of invitation messagges printing.
for (let j = 0; j < guest.length; j++) {
    console.log(`Dear Mr.${guest[j]}, \nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
// found a bigger dinner table.
console.log("Good news! We've found a bigger dinner table,So more space is available.So our new guests are:\n");
// new guests in my array list.
guest.unshift("Ashfaque Ahmed");
guest.splice(2, 0, "Manzoor Ali");
guest.push("Azaad");
// new set of invitation messages printing,one of each person.
for (let k = 0; k < guest.length; k++) {
    console.log(`Dear Mr.${guest[k]}, \nit is our pleasure to invite you to dinner.\nThank you!\n`);
}
export {};
