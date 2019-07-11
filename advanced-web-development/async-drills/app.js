// Timing Out
function burningLogs(message) {
    console.log(message)
}

// burningLogs('It\'s a bit smokey')
// setTimeout(() => burningLogs('Why is the tent on fire?'), 2000)

function getWords() {
    setTimeout(() => console.log('Wait?'), 0)
    setTimeout(() => console.log('that?'), 3000)
    setTimeout(() => console.log('is'), 2000)
    setTimeout(() => console.log('What'), 1000)
}

// getWords()

// Callbacks and Recursion
function done() {
    console.log('Job\'s done! Don\'t ask which job.')
}

function countdown(num, callback) {
    if (num > 1) {
        console.log(num + ' logs and counting.')
        setTimeout(() => countdown(num - 1, callback), 1000)
    } else {
        console.log('Almost there!')
        setTimeout(() => callback(), 1000)
    }
}

// countdown(5, done)

// Release the Beast!

// countdown(34, () => {
//     countdown(21, () => {
//         countdown(13, () => {
//             countdown(8, () => {
//                 countdown(5, () => {
//                     countdown(3, () => {
//                         countdown(2, () => {
//                             countdown(1, () => {
//                                 countdown(1, done)
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// Promises
let lunchTime = 'maybe' || 'maybe not'

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            resolve({
                lunch: 'Sandy Witch',
                drink: 'Nog of Egg',
            })
        } else {
            reject(new Error('No food for you!'))
        }
    })
}

orderMeSomeFood()
    .then(({
        lunch,
        drink
    }) => {
        console.log(`Have a nice ${lunch} with ${drink} to wash it down!`)
    })
    .catch((err) => {
        console.error('The Chef is unhappy. She says:')
        console.error(err)
        console.log('There\'s a dumpster out back')
    })