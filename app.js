/* Best practice: lead JS source code with a list of your
variables. That way, you can easily change variables for
quick and fun program tweaks down the line. */
var upper = 10000; /* This defines upper limit of random #, so the random number will be anything 1-10,000 */
var randomNumber = getRandomNumber(upper); /* This generates a random # that computer has to guess. */
var guess; /* This holds the computer's guess. */
var attempts = 0; /* This holds the computer's total number of attempts before guessing correctly. */

/* This is a function to generate a random number. */
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

/* Below the above variables and function should be this loop. */

while ( guess !== randomNumber ) { /* "!" equals "not" ... "==" equals "equal to" ... so, "!==" means "not equal to" ... "!" is a "logical operator".  Anyway, this line simply means that if the computer's guess is NOT EQUAL TO the random number, then this condition evaluates to TRUE, therefore THE LOOP RUNS, meaning whatever is in the brackets gets executed. */
  guess = getRandomNumber ( upper ); /* WTM: execute Line 10's function, store what gets generated in the variable "guess" */
  attempts += 1; /* This just keeps track of the number of attempts before a guess is the same as a randomly generated number. */
}

/* Finally, we want to print results to the screen, like so. */
document.write("<p>The random number was: " + randomNumber + "<p>");
document.write("<p>It took the computer " + attempts + " attempts to guess correctly.</p>");