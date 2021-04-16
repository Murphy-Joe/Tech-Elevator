// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (var i = 0; i <= contacts.length; i++){
        if (i === contacts.length){
            return "No such contact"
        }
        var obj = contacts[i]
        var objName = obj.firstName
        if (objName === name){
            if (obj.hasOwnProperty(prop)){
                return obj[prop]
            }
            else {
                return "No such property"
            }
        }
    }
// Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
