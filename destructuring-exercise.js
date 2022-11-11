// Object Destructuring 1
// What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846}
let {numPlanets, yearNeptuneDiscovered} = facts
console.log(numPlanets) // should print 8
console.log(yearNeptuneDiscovered) // should print 1846

// Object Destructuring 2
// What does the following code return/print?
let planetFacts = {
    numberPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
}
let {numberPlanets, ...discoveryYears} = planetFacts
console.log(discoveryYears); // should print {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Object Destructuring 3
// What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`
}
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // should return Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // should return Your name is Melissa and you like green
getUserData({}) // should return Your name is undefined and you like green

// Array Destructuring 1
// What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"]
console.log(first); // should print Maya
console.log(second); // should print Marisa
console.log(third); // should print Chi

// Array Destructuring 2
// What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]
console.log(raindrops); // should print "Raindrops on roses"
console.log(whiskers); // should print "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // should print ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3
// What does the following code return/print?
let numbers = [10, 20, 30]
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers) // should print [10, 30, 20]

// ES5 Assigning Variables to Object Properties
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
var a = obj.numbers.a
var b = obj.numbers.b

// Write an ES2015 Version
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
const {a, b} = obj.numbers

// ES5 Array Swap
var arr = [1, 2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

// Write an ES2015 Version
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})