// I'm miffed I can't use ES6...
const path = require('path')
const fs = require('fs')

chirps = [{
        user: 'Billy',
        content: 'Greetings, my name is Billy.',
        upVotes: 2,
    },
    {
        user: 'Brenda',
        content: 'Greetings, my name is Brenda.',
        upVotes: 1,
    },
    {
        user: 'Bailee',
        content: 'Greetings, my name is Bailee.',
        upVotes: 6,
    },
    {
        user: 'Bob',
        content: 'Greetings, my name is Bob.',
        upVotes: 0,
    },
    {
        user: 'ThatOnE_gi66',
        content: 'sup',
        upVotes: 298,
    },
]

console.log('Writing chirps to a chirps.json ...')
const chirpsPath = path.join(__dirname, '../chirps.json')
try {
    fs.writeFileSync(chirpsPath, JSON.stringify(chirps))
} catch (err) {
    console.error('You messed up big time')
}

console.log('Well done padawan. You have learned well.')

// Whoops! Totally forgot to store that in a variable
chirps.splice(0, chirps.length)

//   ノಠ益ಠノ彡┻━┻


chirps = JSON.parse(fs.readFileSync(chirpsPath, {
    encoding: 'utf8'
}))

console.log('Here they are again:\n', chirps)