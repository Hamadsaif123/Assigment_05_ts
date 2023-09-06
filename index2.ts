/*
(26) Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/
console.log("\n First verison of code");

const alien_color: string = 'green'; // You can change this value to 'yellow' or 'red' to test different scenarios

if (alien_color === 'green') {
     console.log('The player just earned 5 points.');
}else{
    console.log("Congratulation! just earned 5 points for shooting the alien.");
}

// version 2

 console.log("\n 2nd Version of code");

let alien2_color = 'Blue'; // You can change this value to 'yellow' or 'red' to test different scenarios

if (alien_color === 'green') {
     console.log('The player just earned 5 points.');
}
else{
    console.log("Congratulation! just earned 5 points for shooting the alien.");
}

/*
(27) Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// If the alien is green, print a message that the player earned 5 points.

let alien3_color = 'Green'; // You can change this value to 'yellow' or 'red' to test different scenarios

if (alien3_color === 'green') {
     console.log('The player just earned 5 points.');
}
else if (alien3_color === 'green') {
    console.log("Congratulation! just earned 5 points for shooting the alien.");
}

// version2

let alien4_color = 'Yellow'; // You can change this value to 'yellow' or 'red' to test different scenarios

if (alien3_color === 'Yellow') {
     console.log('The player just earned 10 points.');
}
else if (alien3_color === 'green') {
    console.log("Congratulation! just earned 5 points for shooting the alien.");
}
 else {
    console.log("Congratulation! just earned 10 points for shooting the alien.");
}

// version4

let alien5_color = 'Red'; // You can change this value to 'yellow' or 'red' to test different scenarios

if (alien3_color === 'Red') {
     console.log('The player just earned 15 points.');
}
else if (alien4_color === 'green') {
    console.log("Congratulation! just earned 5 points for shooting the alien.");
}
else if (alien5_color === 'green') {
    console.log("Congratulation! just earned 5 points for shooting the alien.");
}

else{
    console.log("Congratulation! just earned 15 points for shooting the alien.");
}

 /* (28)
 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
 • If the person is less than 2 years old, print a message that the person is a baby.
 • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
 • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
 • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
 • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
 • If the person is age 65 or older, print a message that the person is an elder.
*/

// Set the age variable
const age: number = 25;

// Check the age and print the appropriate message
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

/* (29)
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */

// Create an array of your three favorite fruits
const favoriteFruits: string[] = ["banana", "apple", "strawberry"];

// Check if specific fruits are in the array and print messages accordingly
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favoriteFruits.includes("kiwi")) {
    console.log("You like kiwis, too!");
}
if (favoriteFruits.includes("mango")) {
    console.log("You like mangoes as well!");
}


/*(30)
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

// Create an array of usernames
const usernames: string[] = ["Hamad", "Elonmusk", "Usman", "Charlie", "David"];

// Loop through the array and print greetings
for (const username of usernames) {
    if (username === "Hamad") {
        console.log("Hello Hamad, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

/*(31) No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
 • If the list is empty, print the message We need to find some users!
 • Remove all of the usernames from your array, and make sure the correct message is printed.*/


let UsersName:String[] = ['Hamad','Huzaifa',
'Abdullah','Saleem','Anees','Usman'];

// funtional case

function greetUser(usernames:string[]):void {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
        return;
        }
        for (const username of usernames) {
           if (username.toLowerCase()==='admin') {
            console.log("Hello admin would you like to see a status report?");
            
           } else {
            console.log(`Hello ${username} thank you for logging again.`);
      }            
   }
}
console.log(`For non empty username:\n`);
greetUser(UsersName);
// How to make empty array?
UsersName  = []; 

console.log(`/n/n For empty username:\n`);
greetUser(UsersName);


/*(32) Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users:string[] = ["Hamad","Einstein","Usman",
"Huzaifa","Abdullah"];

let new_users:string[] = ["Asif","Kamran","Zain",
"Waleed","Mateen","Abdul basit"];

function CheckUserName(current_users:string[],new_users:string[]):void 
{
const lowercasedCurrentUser = current_users.map(user => user.toLowerCase());
for (const newUser of new_users) {
  const lowercasedCurrentUser = newUser.toLowerCase();
  if (lowercasedCurrentUser.includes(lowercasedCurrentUser)) {
   console.log(`User ${newUser} is already taken.please enter a new username`);
      } else {
console.log(`User ${newUser} is avalible`);
       }
   }
}

CheckUserName(current_users,new_users);


/* (33) Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate*/

const Numbers:number[] = [1,2,3,4,5,6,7,8,9];

for (let number of Numbers) {
let ordinal:string;
if (number ===1) {
      ordinal ='st'
   } else if (number === 2){
      ordinal = 'nd';
   }else if (number === 3){
      ordinal = 'rd';
   }else{
      ordinal = 'th'; 
   }
console.log(`${number}${ordinal}`);
}


/*(34) Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

const Fav_Pizzas:string[] = ["BQ checken","MalaiBoti","pepperoni"];
console.log("My favorite pizzas are:");
for (let i = 0; i < Fav_Pizzas.length; i++) {
   console.log(Fav_Pizzas[i]);
}
console.log("\nI like these pizzas");
for (let i= 0; i < Fav_Pizzas.length; i++) {
    console.log(`I like ${Fav_Pizzas[i]} pizzas `);
   }
   console.log(`\nI already love pizzas`);
   

/*(35)Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
 You could print a sentence such as Any of these animals would make a great pet!*/


const animals:string[] = ["cat","dog","goat"];
console.log("list of animals");
for (const i of animals) {
   console.log(i);
}
console.log("\nStatement about each animals:");
for (let animal of animals) {
  if (animal === 'dog') {
   console.log(`A ${animal} is a grat pet `);
   } else if(animal === 'cat') {
   console.log(`A ${animal} would be a good companion at home`);
   }else if (animal === 'goat'){
console.log(`A ${animal} is an adorable pet that also gives us milk`);
  }
}

console.log("\nWhat these animals have in common:");
console.log("any of these  animals  would  make a  great pet!");


/*(36)T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/


 const make_shirt = (size:string,message:string)
:void => 
{
   console.log(`Size: ${size},messege: ${message}`);
}

let size:string = "medium";
let messege:string  = "Typescript Insights with Kamran";
make_shirt(size,messege);
make_shirt("Large","Typescript Insight with kamran");


/*(37)Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function makeShirt(Size:string = "Large",messege:string = "I love bockchain expert"):void
{
 return console.log(`Size:${Size},Messege${messege}`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small","Hello Blockchain");


/*(38) Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
Call your function for three different cities, at least one of which is not in the default country.*/

 
function describe_city(city:string,country:string = "Unknown country"):void 
{
console.log(`${city} is an ${country}`);
}
describe_city("Karachi","Pakistan");
describe_city("New york");
describe_city("America","Germany");


/*(39) City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/


const city_country = (city:string,country:string):string => 
{
return `${city},${country}`   
}
console.log(city_country("Lahore","Pkaitan"));
console.log(city_country("New York","USA"));
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Lahore","Pkaitan"));


/* (40) lbum: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/


function make_album(artist:string,title:string,tracks?:number):
{
artist:string;title:string;tracks?:number;   
}
{
   const album = {
      artist,
      title,
      tracks,
   };
   if (tracks !== undefined)
    {
    album.tracks = tracks;  
   }
   return album;
}

const album1 = make_album('Honey sigh','Hum Tum',);
const album2 = make_album('Artist 2','Album 2',12);
const album3 = make_album('Artist 3','Album 3',89);

console.log(album1);
console.log(album2);
console.log(album3);


/*(41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/


const magicianName:string[] = [" Herry pooter","Ip man","Carry on jatta","Maula jutt"];

function show_magicians(magician:string[]):void 
{
for (const item of magician) {
   console.log(item);
   }   
}
show_magicians(magicianName);


/*(42) Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/


const magicianName3:string[] = [" Herry pooter","Ip man","Carry on jatta","Maula jutt"];

function showmagicians(magician:string[]):void 
{
for (const item of magician) {
   console.log(item);
   }   
}
function make_great(magician:string[]):string[] {
const greatMagicians:string[] = magician.map(magician =>`The Great ${magician}`);
return greatMagicians;
}
const greatMagiciansName:string[] = make_great(magicianName);
console.log("Orignal Magicians");
showmagicians(magicianName);

console.log("\nGreat Magacians");
showmagicians(greatMagiciansName);


/*(43) Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/


const magicianName2:string[] = [" Herry pooter","Ip man","Carry on jatta","Maula jutt"];

function showmagicians2(magician:string[]):void 
{
for (const item of magician) {
   console.log(item);
   }   
}
function makegreat(magician:string[]):string[] {
const greatMagicians2:string[] = magician.map(magician =>`The Great ${magician}`);
return greatMagicians2;
}
const greatMagiciansName2:string[] = make_great(magicianName2);

// call function to show orignal magacians 
console.log("Orignal Magicians");
showmagicians(magicianName2);

// call the function to great magacians
console.log("\nGreat Magacians");
showmagicians(greatMagiciansName2);

/*(44)Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.*/ 

function makesandwitch(...item:String[]):void {
   console.log("Sandwitch summary:");
   if (item.length ===0){
      console.log(" - you ordererd an empty  sandwitch.please add some  items.");
   }
   else{
      item.forEach((item,i) => {
         console.log(`  ${i +1},${item}`);
         
      });
   }
   console.log("\n");
}
makesandwitch();
makesandwitch("Turkey","Tomato","Garlic","Mayonnaise");
makesandwitch("Ham","cheese");
makesandwitch("Peanut Butter","Jelly","Banana","Honey");

/*(45)Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments.
'Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/


function createcar(manufacturer:string,model:string,...properties:[string,any][]):any 
{
const car:any = {
   manufacturer,
   model,
};
for(const[key,value] of properties){
   car[key] = value;
}
return car;
}

const mycar = createcar("Toyota","Corolla",["color","red"],["optionalFeature","sunroof"]);
console.log(mycar);

