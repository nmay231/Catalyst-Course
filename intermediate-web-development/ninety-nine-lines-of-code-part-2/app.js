let friends = ['Bob', 'Barbara', 'Synthia', 'Joe', 'Will']

let lines = n => (n == 1 ? 'line' : 'lines')

document.getElementById('hurt-my-ears-and-my-eyes').addEventListener('click', function (e) {

    e.target.textContent = 'Nevermind! MAKE IT STOP!'
    e.target.disabled = true

    for (let friend of friends) {
        let friendDiv = document.createElement('div')
        friendDiv.className = 'friend'

        let header = document.createElement('h3')
        header.textContent = friend
        friendDiv.appendChild(header)
        for (let j = 5; j > 0; j--) {
            let lyric = document.createElement('p')
            lyric.textContent = (
                j + ' ' + lines(j) + ' of code in the file, ' +
                j + ' ' + lines(j) + ' of code; ' +
                friend + ' strikes one out, clears it all out, ' +
                (j - 1 || 'no more') + ' ' + lines(j - 1) + ' of code in the file!'
            )
            friendDiv.appendChild(lyric)
        }

        document.body.appendChild(friendDiv)
    }
})

/*

// We reject you console!

document.getElementsByTagName('button')[0].addEventListener('click', function () {
    for (let friend of friends) {
        console.group(friend.toUpperCase() + ':')
        for (let j = 5; j > 0; j--) {
            console.log(
                j + ' ' + lines(j) + ' of code in the file, ' +
                j + ' ' + lines(j) + ' of code; ' +
                friend + ' strikes one out, clears it all out, ' +
                (j - 1 || 'no more') + ' ' + lines(j - 1) + ' of code in the file!'
            )
        }
        console.groupEnd()
    }
})
*/