console.group('Name')
name = 'Noah May'
var name
console.log(name) // Noah May

setName()

function setName() {
    var name = 'Noah May (again)'
    console.log(name) // Noah May (again)
}

console.groupEnd()

console.group('Hoisting test')
console.log('Start')
let avg = average(2, 2)
console.log('After variable definition')

function average(a, b) {
    console.log('Entered function')
    var answer = (a + b) / 2
    return answer
}
console.groupEnd()

console.group('Fruity')
let fruits = [
    'Pear',
    'Dragon Fruit',
    'Pineapple',
]
//let favFruit

function printFruit() {
    let favFruit = fruits[2]

    console.log(fruits[1])

    function printFavFruit() {
        let leastFruit = fruits[0]
        console.log(favFruit)
    }
    printFavFruit()
    console.log(leastFruit)
}


printFruit()
console.groupEnd()

console.group('Miscellaneous')

someFunc(name)

function someFunc(name) {
    console.log('Hello, ' + name)
}

// errorFunc() // Calling this now would not work

let errorFunc = function () {
    alert('You do not understand hoisting, it seems...')
}

errorFunc() // This works fine
console.groupEnd()