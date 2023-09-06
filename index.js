"use strict";
/* (2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
const personName = "Hamad";
const message = `Hello ${personName}, would you like to learn some TypeScript today?`;
console.log(message);
/*(3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let User = "Muhmmad hamad";
// in lowercase
let lowercase = User.toLowerCase();
console.log(lowercase);
//  in uppercase
let uppercase = User.toUpperCase();
console.log(uppercase);
// in titlecase
let word = User.split(" ");
let titlecase = "";
for (let i = 0; i < word.length; i++) {
    titlecase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecase);
/*(4) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:*/
var quote = "He Said,People who have no hold over their process of thinking are likely to be ruined by liberty of thought.";
var author = "Allama Iqbal";
console.log(`Quote: "${quote}"`);
console.log(`Author: ${author}`);
/*(5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.*/
let person = "Albert Einstein";
let message2 = `${person} once said, 'Imagination is more important than knowledge.'`;
console.log(message2);
/*(6)Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then console the name after striping the white spaces.*/
const nameWithWhitespace = "\t   Hamad saif   \n";
console.log("Name with Whitespace:", nameWithWhitespace);
const cleanedName = nameWithWhitespace.trim();
console.log("\nName after Stripping Whitespace:", cleanedName);
/*(7) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. */
// Adding
let Adding = 6 + 8;
console.log("Addition", Adding);
// Multiplying
let Multiplying = 6 * 8;
console.log("Multiplication", Multiplying);
// Substraction
let Substraction = 6 - 8;
console.log("Substraction", Substraction);
// dividing
let dividing = 6 / 8;
console.log("Division", dividing);
/*(8)You should create four lines that look like this:
// console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log("-".repeat(50));
console.log(5 + 3);
console.log("-".repeat(50));
console.log(5 * 3);
console.log("-".repeat(50));
console.log(5 / 3);
console.log("-".repeat(50));
console.log(5 - 3);
/*(9) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.*/
let favoriteNumber = 72;
let message3 = `My favorite number is ${favoriteNumber}.`;
console.log(message3);
/*(10)   Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.*/
// Hwo to comment line
//(1) Ctrl + salash
//(2) salash star /* and ending comment star salah */
/*(11) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
const names = ["Hamad", "Huzaifa", "Abdullah", "Mateen"];
for (let i = 0; i < names.length; i++) {
}
console.log(names);
/*(12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
const Names = ["Hamad", "Usman", "Ali", "Subhan"];
const greetingMessage = "Hello, ";
for (const name of Names) {
    console.log(`${greetingMessage}${name}!`);
}
/*(13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
const motorcycles = ["Honda", "Yamaha", "Kawasaki", "Harley-Davidson"];
for (const motorcycle of motorcycles) {
    console.log(`I would like to own a ${motorcycle} motorcycle.`);
}
/*(14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
const guestList4 = ["Huzaifa", "Hamad", "Abdullah"];
guestList4.forEach(() => {
    return guestList;
});
console.log(`Dear ${guestList4},You are cordially invited to join me for dinner. It would be an honor to have you as my guest.Sincerely, [Your Name]`);
/*(15) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
const guestList = ["Abu bakar", "Muhmmad saleem", "Zain"];
exports.guestList = guestList;
const guestCannotAttend = "Naeem";
const replacementGuest = "John Smith";
const updatedGuestList = guestList.map(guest => (guest === guestCannotAttend) ? replacementGuest : guest);
for (const guest of updatedGuestList) {
    console.log(`Dear ${guest},You are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Your Name]`);
}
/*
(16)More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
let guests = ["Abdullah", "huzaifa", "Hamad"];
function printInvitations(guestList) {
    for (const guest of guestList) {
        console.log(`Dear ${guest}, you are invited to dinner!`);
    }
}
printInvitations(guests);
console.log("Good news! I found a bigger dinner table!");
guests.unshift("David");
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Eva");
guests.push("Frank");
printInvitations(guests);
/*
(17)Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
// //!(1) Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let Guestlist = ["Hamad", "Huzaifa", "Usman", "Ali", "Waleed", "Zafar", "Anees"];
console.log("I can invite only two people for dinner");
// //!(2) Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (Guestlist.length > 2) {
    let Remove = Guestlist.pop();
    console.log(`Soory ${Remove} I can't invite to dinner`);
}
// //!(3) Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let Guests of Guestlist) {
    console.log(`Hello ${Guests},You are still invited to dinner`);
}
//!(4) Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Guestlist.pop();
Guestlist.pop();
console.log(`Guest list After dinner`, Guestlist);
/*
(18) Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
//step (1) Store the locations in a array. Make sure the array is not in alphabetical order.
let Destination = ["Pakistan", "India", "America", "Turkey"];
// step(2) Print your array in its original order.
console.log("Orignal Order");
console.log(Destination);
// step(3) Print your array in alphabetical order without modifying the actual list.
console.log("/n alphabetical order without modifying the actual list.");
console.log([...Destination].sort());
// Step 4  Show that your array is still in its original order by printing it.
console.log("Showing array is still in its original order");
console.log(Destination);
// Step 5 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n alphabetical order without modifying the actual list.");
console.log([...Destination].sort().reverse());
// Step 6 Show that your array is still in its original order by printing it again.
console.log("Sowing array is still in its orignal order");
console.log(Destination);
// Step 7 Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order");
Destination.reverse();
console.log(Destination);
// Step 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\Back to orignal");
Destination.reverse();
console.log(Destination);
// Step 9  Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\Cahnge to alphabatacial order");
Destination.sort();
console.log(Destination);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Cahnge to Reverse Alphabatacial Order");
Destination.sort().reverse();
console.log(Destination);
console.log(`n\Printing Messege indicating number of guest`);
console.log(`We had finally invited ${guestList.length} guest in exercise 15`);
/*(20) Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
const countries = ["USA", "Pakistan",
    "Australia", "japan", "china", "india"];
console.log("List of countries");
for (let country of countries) {
    console.log(country);
}
/* (21) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
// Object containing various data types
const myObject = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        street: "123 Main St",
        city: "Cityville",
        zipCode: "12345",
    },
};
// Object containing different types of items
const itemObject = {
    item1: "Book",
    item2: 42,
    item3: ["Apple", "Banana", "Cherry"],
    item4: {
        type: "Electronics",
        brand: "Samsung",
        model: "Galaxy S21",
    },
};
// Accessing and printing values from the objects
console.log("myObject:");
console.log("Name:", myObject.name);
console.log("Age:", myObject.age);
console.log("Hobbies:", myObject.hobbies.join(", "));
console.log("Address:", myObject.address.street, myObject.address.city, myObject.address.zipCode);
console.log("\nitemObject:");
console.log("Item 1:", itemObject.item1);
console.log("Item 2:", itemObject.item2);
console.log("Item 3:", itemObject.item3.join(", "));
console.log("Item 4:", itemObject.item4.type, itemObject.item4.brand, itemObject.item4.model);
/* (22) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
function CreateFruits(Name, colour, taste) {
    return {
        Name, colour, taste,
    };
}
//! create an array of food
const fruits = [
    CreateFruits("Apple", "Red", "Sweet"),
    CreateFruits("Banana", "Yellow", "Sweet"),
    CreateFruits("Orange", "Orange", "Sweet"),
    CreateFruits("Grapes", "Purple/Green", "Sweet"),
    CreateFruits("Strawbery", "Red", "Sweet"),
];
// Access an invalid index
const invalid = 10; // There are only 5 in
// the Array,so this will case in error
console.log(`Fruits at index ${invalid}:`, fruits[invalid]);
// Print the fruits
fruits.forEach((Fruit) => {
    console.log(`Name: ${Fruit.Name}; Colour: ${Fruit.colour}; Taste: ${Fruit.taste}`);
});
/*
(23) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'Honda'? I predict false.");
console.log(car == 'Honda');
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
console.log("Is car !== 'Honda Civic'? I predict True.");
console.log(car !== 'Honda Civic');
console.log("Is car != 'subaru'? I predict True.");
console.log(car != 'Toyota');
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
let age = 17;
console.log("Is age > 18? I predice true.");
console.log(age > 18);
console.log("Is age < 21? I predice False.");
console.log(age < 21);
/*
(24) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// Tests for equality and inequality with strings
let string1 = "hello";
let string2 = "world";
// Test for equality
let isEqual = string1 === string2; // False
// Test for inequality
let isNotEqual = string1 !== string2; // True
let name1 = "Alice";
let name2 = "Bob";
// Test for equality
let areNamesEqual = name1 === name2; // False
// Test for inequality
let areNamesNotEqual = name1 !== name2; // True
// Tests using the lower-case function
let text = "Hello World";
// Test if lowercase equals "hello world"
let isLowercaseEqual = text.toLowerCase() === "hello world"; // True
// Test if lowercase not equals "hello world"
let isLowercaseNotEqual = text.toLowerCase() !== "hello world"; // False
// Numerical tests
let num1 = 10;
let num2 = 5;
//  Test for equality
let isNumEqual = num1 === num2; // False
// Test for inequality
let isNumNotEqual = num1 !== num2; // True
// Test if num1 is greater than num2
let isNumGreaterThan = num1 > num2; // True
// Test if num1 is less than num2
let isNumLessThan = num1 < num2; // False
// Test if num1 is greater than or equal to num2
let isNumGreaterThanOrEqual = num1 >= num2; // True
// Test if num1 is less than or equal to num2
let isNumLessThanOrEqual = num1 <= num2; // False
// Tests using "and" and "or" operators
let isTrue = true;
let isFalse = false;
// Test using "and
/*
(25)Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/
// const alien_color: string = 'green'; // You can change this value to 'yellow' or 'red' to test different scenarios
if (alien_color === 'green') {
    console.log('The player just earned 5 points.');
}
