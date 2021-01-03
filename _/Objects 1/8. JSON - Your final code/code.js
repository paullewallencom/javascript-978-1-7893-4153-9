//let's create an object
var person = {
    name: "Mark Zuckerberg",
    state: "California",
    birth: 1984
};

//JSON object
var personJSON = {
    "name": "Mark Zuckerberg",
    "state": "California",
    "birth": 1984
};
//JSON array
var personJSON2 = [
    {
    "name": "Mark Zuckerberg",
    "state": "California",
    "birth": 1984
},
    {
    "name": "Mark Zuckerberg",
    "state": "California",
    "birth": 1984
}
];

console.log(personJSON);
console.log(typeof personJSON);
console.log(personJSON2);
console.log(typeof personJSON2);

//convert to a JSON string
var personString = JSON.stringify(personJSON);
console.log(personString);
console.log(typeof personString);
console.log(personString == '{"name":"Mark Zuckerberg","state":"California","birth":1984}');
var personString2 = JSON.stringify(personJSON2);
console.log(personString2);
console.log(typeof personString2);

//parse a JSON string
var stringParsedAsJSON = JSON.parse(personString);
console.log(stringParsedAsJSON);
console.log(typeof stringParsedAsJSON);
var stringParsedAsJSON2 = JSON.parse(personString2);
console.log(stringParsedAsJSON2);
console.log(typeof stringParsedAsJSON2);






