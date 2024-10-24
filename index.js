// "My name is
// Niklas."; // Don't work

`My name is 
Niklas and I am
a developer.`; // Works just fine!

// ############ var ############ //

// console.log(firstName);

// var firstName = "Niklas";
// console.log(firstName);

// var firstName = "Henrik";
// console.log(firstName);

// firstName = "Erik"; // Re-assignment, it's valid.
// console.log(firstName); // Erik

// var lastName;

// ############ const ############ //

// const age = 39;
// console.log(age);

// // age = 45;
// // console.log(age);

// const number = 54;
// // const number = 45; // Won't work, VSC will complain.
// console.log(number);
// const name = "Niklas";

// const firstName = "Niklas";
// const lastName = "Johnsson";

// if (true) {
//   const lastName = "Svensson"; // A totally different variable, it's another scope.
//   console.log(firstName); // Niklas
//   console.log(lastName);
// }

// console.log(firstName); // Exists.
// console.log(lastName); //Doesn't exist in this scope.

// ############ if statements ############ //

// const age = 20;

// if (age > 18) {
//   console.log("You are an adult.");
// }

const age = 16;

if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are still classed as a minor.");
}
