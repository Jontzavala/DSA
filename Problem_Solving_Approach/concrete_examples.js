// Write a function which takes in a string and returns counts of each character in the string.

//Asumming you went through the 5 steps that are located in add.js in this folder.
//Next steps would be
// - Start with simple examples
// - Progress to more complex examples
// - Explore examples with empty inputs
// - Explore examples with invalid inputs

//simple example
charCount("aaaa"); // {a: 4}
chatCount("hello"); // {h: 1, e: 1, l: 2, o: 1}

//more complex example
("my phone number is 138394"); // Do we want to account for spaces? What about other characters ($, numbers)?
("Hello hi"); // Do we store an uppercase "H" and a lowercase "h"? Do we ignore it?

// empty inputs example
charCount(""); // what do we want to return when this happens? An empty object? Null? False? Undefined? Error?

// invalid inputs example
charCount(12332);
