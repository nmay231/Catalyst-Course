document.addEventListener('DOMContentLoaded', function () {
    // Objective 1
    let button = document.createElement('button')
    button.addEventListener('click', function () {
        alert('Hello World!')
    })
    button.textContent = 'Alert button'

    document.body.insertBefore(
        button,
        document.getElementsByTagName('form')[0]
    )

    // Objective 2
    let formButton = document.querySelector('.form-button')
    formButton.addEventListener('click', function (e) {
        alert(e.target.previousElementSibling.value)
        e.preventDefault()
    })

    // Objective 3
    let colorShifter = document.querySelector('.colorShifter')
    colorShifter.addEventListener('mouseover', function (e) {
        colorShifter.style.backgroundColor = 'red'
    })
    colorShifter.addEventListener('mouseout', function (e) {
        colorShifter.style.backgroundColor = 'white'
    })

    // Objective 4
    let para = document.querySelector('p')
    para.addEventListener('click', function (e) {
        let r = () => Math.floor(Math.random() * 255)
        e.target.style.color = 'rgb(' + r() + ',' + r() + ',' + r() + ')'
    })

    // Objective 5
    document.querySelector('button.showName')
        .addEventListener('click', function () {
            let span = document.createElement('span')
            span.textContent = 'Noah May'
            document.querySelector('div.myName').appendChild(span)
        })

    // Objective 6
    function* friendGenerator() {
        let friends = [
            'Bartholomew',
            'Bob',
            'Brenda',
            'Billy',
            'Bailly',
            'Bella',
            'Benjamin',
            'Bethany',
        ]
        for (let friend of friends) {
            yield friend
        }
    }
    let myFriends = friendGenerator()
    document.querySelector('button.addFriend')
        .addEventListener('click', function () {
            let listItem = document.createElement('li')
            listItem.textContent = myFriends.next().value
            console.log(listItem.textContent)
            if (listItem.textContent === '') {
                listItem.textContent = 'You just don\'t have anymore friends. ):'
                myFriends.next = function () {
                    return {
                        value: 'Seriously? This isn\'t helping any.'
                    }
                }
            }
            document.querySelector('ul').appendChild(listItem)
        })
})