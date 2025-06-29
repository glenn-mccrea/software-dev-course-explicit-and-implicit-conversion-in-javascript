/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

let result = "5" - 2;
console.log(
  "The result is: " + result
); /* This one seems correct. String "5" implicitly converts to number 5 and then 2 is mathematically subtracted to equal 3 */

let isValid = Boolean("false");
if (isValid) {
  console.log("This is valid!");
} /* This one is tricky and I'm not sure what's desired here. Technically the code is correct. 
Because the string contains "false" and is not empty "", the boolean itself IS infact true. So, this is valid.
But, is the goal to make it "false" match?  If it is, after research below is what I've come up with.*/

let isValidString =
  Boolean("false"); /* This is the first line with a new variable name */
let isValid2 =
  isValidString ===
  "true"; /* This line is a boolean that checks if isValidString is, infact, strictly a string that says "true". */
if (isValid2) {
  /* This line calls requests the answer to the question of boolean true vs. false */
  console.log(
    "This is valid!"
  ); /* This is the result if it is a true boolean. */
} else {
  console.log(
    "This is not valid"
  ); /* This is the result if it is a false boolean. */
}
/* Am I simply over complicating this? Not sure. 
But doing that now gives me a console output of "this is not valid" since the isValidString value is NOT a string that strictly says "true" */

let age =
  Number(
    "25"
  ); /* This line needed to explicitly convert the string to a number to be added correctly to the 5 in the next line */
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

let speed = String(45); /* convert number to string */
let units = " mph";
let speedLimit = speed + units; /* add string to string */
console.log(speedLimit); /* all string result */

let stockedApples = "five"; /* I used a string here */
let soldApples = 5; /* I used a number here */
let remainingStock =
  stockedApples -
  soldApples; /* Because remainingStock is a math function and stockedApples minus soldApples is implictly NaN. */
console.log("Remaining stock:", remainingStock); /* Show NaN */
if (isNaN(remainingStock))
  console.log(
    "**!Apple quantity input error!**"
  ); /* I  learned that isNan has implicit conversion inside of itin my research.
  I felt like it was a good fit */
