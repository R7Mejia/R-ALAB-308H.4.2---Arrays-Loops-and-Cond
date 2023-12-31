//////////////EXERCISE ONE////////////
/////////////Easy Going//////////////
/*
//Write a for loop that will log the numbers 1 through 20.
for (let a = 0; a <= 20; a++) {
    //console.log(a);
}

////////////////EXERCISE TWO////////////
///////////////Get Even////////////////
//Write a for loop that will log only the even numbers in 0 through 200.
for (let b = 0; b <= 200; b++){
    if (b % 2  === 0) {
        //console.log(b)
    }
}
/////////////////EXERCISE THREE////////////
////////////////Fizz Buzz///////////////
// Write a Javascript Application that logs all numbers from 1 - 100.
/*for (let c = 1; c <= 100; c++){
    console.log(c)
}
// If a number is divisible by 3, log "Fizz" instead of the number.
// If a number is divisible by 5, log "Buzz" instead of the number.
// If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.
////////////////////////////////////////////////////
////////////////THE "FIZZBUZZ" PART////////////////
//////////////////////////////////////////////////
const c1 = 105;//this value can change IF I want to explore more options

if (c1 % 3 === 0 && c1 % 5 === 0) {
    console.log("FizzBuzz");
} else if (c1 % 3 === 0) {
    console.log("Fizz");
} else if (c1 % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(c1);
}
////////////////EXERCISE FOUR////////////
///////////////Wild Wild Life///////////
//Use the following arrays to answer the questions below(name, species, age, hometown).
/*const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
const planteeNewAge = plantee.splice(2, 1, 5001)//splice() and slice() c'mon!
console.log(plantee)
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
const wolfyNewTown = wolfy.splice(3, 1, "Gotham City");//(3 = index, 1 = how many elements should be replace, "" = the replacement)
console.log(wolfy)
// Give D'Art a second hometown by adding "Hawkins"
let dartSecondTown = dart.push("Hawkins");
console.log(dart)
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
let newGuy = wolfy.splice("Gameboy");
console.log(wolfy)
////////////////EXERCISE FIVE/////////////////////
///////////////Yell at the Ninja Turtles/////////
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
//Use a for of loop to call toUpperCase() on each of them and print out the result.
const newTurtles = [];
for (let d = 0; d < ninjaTurtles.length; d++){
    newTurtles.push(ninjaTurtles[d].toUpperCase());
    console.log(newTurtles);
}
////////////////EXERCISE SIX+/////////////////////
///////////////Methods, Revisited////////////////
//Here is a list of favorite movies:

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

//console log the index of Titanic
console.log(favMovies[8])
//Use the.sort method.
favMovies.sort();
console.log(favMovies);
// Use the method pop.
favMovies.pop();
console.log(favMovies)
// push "Guardians of the Galaxy".
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);
// Reverse the array.
favMovies.reverse();
console.log(favMovies)
// Use the shift method.
favMovies.shift();
console.log(favMovies);
// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
const djangoIndex = favMovies.indexOf("Django Unchained");
favMovies.splice(djangoIndex, 1, "Avatar");
console.log(favMovies);

/////////////////HELP NEEDED!!!!!////////////
////////////////////////////////////////////
// slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
// Store the value of your slice in a variable and console.log it.
// console.log your final results.

const middleIndex = Math.floor(favMovies.length / 2);
favMovies.slice(middleIndex);//I DON'T REALLY GET WHAT THEY WNT ME TO DO HERE.

console.log(middleIndex)//this consoles log 9, and that's the middle of the array. But what are the other instructins about?

//////////////////////////////////////////
/////////////////////////////////////////

// After running the above tasks, console.log the index of "Fast and Furious."
// const fastAndFuriousIndex = favMovies.indexOf("Fast and Furious");
// console.log(fastAndFuriousIndex);//18

////////////////EXERCISE SEVEN/////////////////////
///////////////Where is Waldo////////////////////

const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]],
];

//Remove Eggbert (hint look at the slice/splice methods).
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo)

//Change "Neff" to "No One".

// const neffIndex = whereIsWaldo[2].indexOf("Neff");
// whereIsWaldo[2].splice(neffIndex, 1, "No One");
// console.log(whereIsWaldo);

// Access and console.log "Waldo".
const waldoIndex = whereIsWaldo[2][1][1];
console.log(waldoIndex);

////////////////EXERCISE EIGHT/////////////////////
///////////////Excited Kitten/////////////////////
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human... why you taking pictures of me...?", "...the catnip made me do it...", or "...why does the red dot always get away...?" at random.
const kittyTalkie = ["love me", "pet me!", "HSSSSSS"];

for (let e = 0; e <= 20; e++) {
  if (e % 2 === 0) {
    const randomIndex = Math.floor(Math.random() * kittyTalkie.length);
    console.log(kittyTalkie[randomIndex]);
  } else {
    console.log(
      "Yo, human... why you taking pictures of me...? HSSSSSSS 😾 😾😾 😾"
    );
  }
}
////////////////EXERCISE NINE/////////////////////
///////////////Find the Median///////////////////
//Find the median number in the following nums array, then console.log that number.

//Hint: If you check the length of the array divided by two, you might get not get a whole number. In which case, look into Math.floor().
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Sort the array in ascending order.
nums.sort((a, b) => a - b);

// Calculate the middle index of the array. (math.floor is used)
const middlIndex = Math.floor(nums.length / 2);

// Find the median.
let median;
if (nums.length % 2 === 0) {
    median = (nums[middlIndex] + nums[middlIndex - 1]) / 2;
} else {
    median = nums[middlIndex];
}

// Console.log the median.
console.log(median);
*/

//////////////////THE END//////////////////
