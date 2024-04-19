/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
*/
let guest = ["Ghulam Murtaza", "Shahid Ali", "Sohail"];
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear Mr.${guest[i]},\nit is our pleasure to invite you to dinner.\nThank You!\n`);
} /*
Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
*/
console.log(`"unfortunately ${guest[2]},can't come to dinner"`);
guest[2] = "Abdul Hadi";
console.log("\nNew List of Invitation\n");
// second set of invitation messages priting.
for (let j = 0; j < guest.length; j++) {
    console.log(`Dear Mr.${guest[j]}, \nit is our pleasure to invite you to dinner.\nThank You!\n`);
}
export {};
