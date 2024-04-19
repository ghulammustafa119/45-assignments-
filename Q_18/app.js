// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Karbala", "Iran", "Saoodi arab", "Lahore", "Iraq"];
// •  array in its original order.
console.log(places);
// •  array in alphabetical order without modifying the actual list.
console.log([...places].sort());
// • array is still in its original order by printing it.
console.log(places);
// • array in reverse alphabetical order without changing the order of the original list.
console.log([...places].sort().reverse());
// • array is still in its original order by printing it again.
console.log(places);
// • Reverse order of the list by Printing the array its order has changed.
console.log(places.reverse());
// • Reverse order of the list again.list show it’s back to its original order.
console.log(places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places.sort().reverse());
export {};
