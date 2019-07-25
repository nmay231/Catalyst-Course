// Author Name
let fullName = 'Noah May'
// Number of US States
let USStateCount = 50
// Also known as nine
let notSeven = 4 + 5

sayHello('Hello World... It\'s you again...')

// Charles who is 21, Abby who is 27, James who is 18, and John who is 17
checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)

let veggies = ['Brocolli', 'Lettuce', 'Tomatoes', 'Cow']

for (let item of veggies) {
    console.log(item)
}

let peoples = [{
        name: 'Bartholomew',
        age: 7,
    },
    {
        name: 'Steven',
        age: 14,
    },
    {
        name: 'Martha',
        age: 21,
    },
    {
        name: 'Jose',
        age: 28,
    },
    {
        name: 'Julia',
        age: 35,
    },
]

for (let person of peoples) {
    console.log(person.name, ' ', person.age)
    console.log(checkAge(person.name, person.age))
}

let oddnessDeterminer = getLength('Hello World')
if (oddnessDeterminer % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}

function sayHello(message) {
    alert(message)
}

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry, ' + name + '. You must be at least 21 to enter this site.')
        return false
    } else if (age < 0 || age > 999) {
        // Complain to the coding deities
        console.error('You are a liar!')
        return false
    } else {
        return true
    }
}

function getLength(string) {
    return string.length
}