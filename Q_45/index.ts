import { features } from "process";
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
*/
function carInfo(manufacturer: string, model: string, ...options: string[]): { [key: string]: string } {
    let car: { [key: string]: string } = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let myCar = carInfo("Toyota", "Corolla", "color:red", "year:2024", "type:sedan");
console.log(myCar);