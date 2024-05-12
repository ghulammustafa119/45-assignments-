/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function makeSandWich ([...items]:string[]){
 console.log("\nmaking a sandwich with following items: \n");
 
 items.forEach((element) => console.log("- " + element)); 
 }

makeSandWich(["Ham", "Cheese", "Lttuce"]);
makeSandWich(["Turkey", "Bacon"]);
makeSandWich(["Peanut", "jelly","Mayo","Egg","Cheese","Chicken"]);