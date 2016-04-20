
var colors = require('colors');
var synonymsGen = require('./library/synonyms');
var newRequest = new synonymsGen.SynonymAPI("36da246a7b4429bb22f26af2ac9b57ad");

newRequest.getSynonyms("lift",function(obj) {
    console.log(colors.underline(colors.red("Synonyms for the noun: "))+ obj.noun.syn);
    console.log(colors.underline(colors.red("Synonyms for the verb: "))+ obj.verb.syn);
});