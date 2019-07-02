let divHeader = document.createElement('div')
divHeader.className = 'header-container'

let header
for (let i = 1; i <= 6; i++) {
    header = document.createElement('h' + i)
    // Purposely changed className to header to not confuse with h# elements
    header.className = 'header' + i
    header.appendChild(document.createTextNode('This is an h' + i))
    divHeader.appendChild(header)
}

document.addEventListener('DOMContentLoaded', function () {
    // Could've used appendChild(), but wanted to mess with other DOM methods
    document.body.insertBefore(
        divHeader, document.getElementsByClassName('button')[0]
    )
})

document.addEventListener('dblclick', function (e) {
    if (e.target.className.slice(0, 6) === 'header') {
        e.target.style.backgroundColor = randomColor()
    } else if (e.target.className === 'list-item') {
        e.target.parentElement.removeChild(e.target)
    }
})


let getNextListItem = listItemGenerator()

document.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BUTTON') {
        document.getElementById('important-list').appendChild(
            getNextListItem()
        )
    } else if (e.target.nodeName === 'LI') {
        e.target.style.backgroundColor = randomColor()
    }
})


// I'm using a closure to overcomplicate things because "why not?" (:
function listItemGenerator() {
    let i = 1

    function getNextListItem() {
        let listItem = document.createElement('li')
        listItem.textContent = 'This is list item ' + i++
        listItem.className = 'list-item'
        return listItem
    }
    return getNextListItem
}

function randomColor() {
    let colors = [
        'blue',
        'black',
        'brown',
        'blueviolet',
        'burlywood',
        'beige',
        'bisque',
        'blanchedalmond'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}