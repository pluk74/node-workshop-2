/*
Creating our own callback-receiving functions (higher-order functions)

Create a file called call-callbacks.js where all your code will be

Create a function called firstChar that takes a string and a callback, and “returns” the first character of the string after one second.

NOTE: You won’t be allowed to use the return keyword, because you’ll only be “returning” in the callback to setTimeout, way after your function has finished executing.

Create a function called lastChar that takes a string and “returns” the last character of the string after one second.

Create a function called getFirstAndLast that takes a string and “returns” the first+last character of the string. Your function should use firstChar and lastChar to do its work. I should be able to call your function like this:

  getFirstAndLast("hello", function(firstLast) {
    console.log(firstLast); // should output "ho"
  });
Add/commit/push

Create a pull request, and keep pushing to it after each exercise
*/

function firstChar(str, cback) {

    setTimeout(function() {
        var result = str.charAt(0);
        cback(result);
    }, 1000);
}

function lastChar(str, cback) {

    setTimeout(function() {
        var result = str.charAt(str.length - 1);
        cback(result);
    }, 1000)
}

function getFirstAndLast(str, cback) {

    firstChar(str, function(firstLetter) {
        lastChar(str, function(lastLetter) {
            cback(firstLetter+lastLetter);
        })
    })

   
}



//call
getFirstAndLast("hello", function(firstLast) {
    console.log(firstLast); // should output "ho"
});