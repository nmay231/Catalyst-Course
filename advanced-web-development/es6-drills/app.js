function favMovie(movie = 'The Room', name = 'the world') {
    console.log(`I am ${name} and my favorite movie is "${movie}"`)
}

favMovie()
favMovie('Sherlock Holmes: A Game of Shadows', 'Bartholomew')

// Doesn't work as I expected...
favMovie(name = 'a child', movie = 'Bob the Builder')

let arrowMovie = (name = 'the world', movie = 'The Room') => console.log(`I am ${name} and my favorite movie is "${movie}"`)

arrowMovie('a child', 'Bob the Builder')


let getFirstName1 = (name) => {
    return name.split(' ')[0]
}

let getFirstName2 = name => name.split(' ')[0]

let stats = (x, y) => ({
    exponentiation: x ** y,
    product: x * y,
})

let result = stats(2, 3)
console.log(`${result.exponentiation} ${result.product}`)

function seriously(name, location, favFood) {
    console.log(`Wait, you eat ${favFood} at ${location}? Seriously, ${name}!`)
}

let arrrrrgs = ['Bartholomew', 'Subway', 'McChickens']
seriously(...arrrrrgs)

let meNotHaveSemicolons // This forces ASI to run the following code without errors

(function (name) {
    let chars = [...name]
    console.group('Spreading strings:')
    for (let i in chars) {
        console.log(i + ':', chars[i])
    }
    console.groupEnd()
})('Noah May')