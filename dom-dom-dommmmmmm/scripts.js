document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button')
    btn.textContent = 'Add Square'

    let divContainer = document.createElement('div')
    divContainer.className = 'div-container'

    btn.addEventListener('click', function (e) {
        divContainer.appendChild(newDiv())
    })

    document.body.appendChild(btn)
    document.body.appendChild(divContainer)
})

function newDiv() {
    let div = document.createElement('div')
    div.className = 'square'
    div.id = div.textContent = document.getElementsByClassName('square').length

    if (div.id % 2 === 0) {
        // I decided to use closures because "why not?"
        div.addEventListener('dblclick', delAfter(div))
    } else {
        div.addEventListener('dblclick', delBefore(div))
    }
    div.addEventListener('click', changeColor(div))

    return div
}

function delAfter(div) {
    function callback() {
        if (div.nextElementSibling === null) {
            alert('No square after that one!')
        } else {
            div.parentElement.removeChild(div.nextElementSibling)
        }
    }
    return callback
}

function delBefore(div) {
    function callback() {
        if (div.previousElementSibling === null) {
            alert('No square before that one!')
        } else {
            div.parentElement.removeChild(div.previousElementSibling)
        }
    }
    return callback
}

function changeColor(div) {
    function callback() {
        div.style.backgroundColor = randomColor()
    }
    return callback
}

function randomColor() {
    let colors = [
        'blue',
        'black',
        'burlywood',
        'blueviolet',
        'blanchedalmond',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}