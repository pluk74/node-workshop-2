/*
In this file, create and export a constructor function called SynonymAPI. It takes an api key as parameter and sets it on the new object

In the prototype of SynonymAPI, add a function getSynonyms. It takes a word and a callback. It makes a request to the web api and gives back the results as an object to the callback function.

If there was an error, it should be passed down to the callback

Creating the program:

Create a file get-synonyms.js at the root of your project

Import your module and create an instance using your API key

Prompt the user for a word

Using your API, retrieve the synonyms/antonyms/etc. for the input word

If everything goes well, display all the results to the user in a nice way

Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:

colors

cli-table

node-emoji

Add/commit/push

*/
var request = require("request");

function SynonymAPI(apiKey) {

    this.apiKey = apiKey;

}

SynonymAPI.prototype = {
    getSynonyms: function(word, callback) {

        var wwwThesaurus = "http://words.bighugelabs.com/api/2/"+this.apiKey+"/"+word+"/json";

        request(wwwThesaurus, function(err, result) {
            callback(JSON.parse(result.body));
            


        });
    }
}



module.exports = {
    SynonymAPI: SynonymAPI
}