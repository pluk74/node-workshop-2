/*
Using your first module

At the root of the project, create a file called fortune-teller.js

In this file, load your fortune module that you created in the previous step

Using the module, make your program output a random fortune to the command-line

Run your program from the command line with node fortune-teller.js

Add/commit/push

*/

var fortuneGen = require('./library/fortune');

console.log(fortuneGen.getFortune());