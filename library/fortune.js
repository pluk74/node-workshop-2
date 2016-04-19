/*
Your first module!

Create a library directory at the root of your project

Inside this directory, create a file called fortune.js

In this file, create a module that exports one getFortune function

When the getFortune function is called, it should return a random fortune/motivational quote

Add/commit/push

*/
var fortunes = [
    "Today it's up to you to create the peacefulness you long for.",
    "A friend asks only for your time not your money.",
    "If you refuse to accept anything but the best, you very often get it.",
    "A smile is your passport into the hearts of others.",
    "A good way to keep healthy is to eat more Chinese food.",
    "Your high-minded principles spell success.",
    "Hard work pays off in the future, laziness pays off now.",
    "Change can hurt, but it leads a path to something better.",
    "Enjoy the good luck a companion brings you.",
    "People are naturally attracted to you."
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFortune() {
    return fortunes[getRandomInt(0,10)];
}

module.exports = {
    getFortune: getFortune
}