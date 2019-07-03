$(document).ready(function () {
    // Objective 1
    $('body').prepend('<button>Alert Button jQuery style</button>')
    $('button:first').click(function () {
        alert('Hello World!')
    })

    // Objective 2
    $('form').submit(function () {
        alert($('#textBox').val())
        return false // Prevent page from reloading
    })

    // Objective 3
    $('.colorShifter').mouseover(function () {
        $(this).css('background-color', 'red')
    }).mouseleave(function () {
        $(this).css('background-color', 'white')
    })

    // Objective 4
    $('p').click(function () {
        let r = () => Math.floor(Math.random() * 255)
        $(this).css(
            'color',
            'rgb(' + r() + ',' + r() + ',' + r() + ')'
        )
    })

    // Objective 5
    $('button.showName').click(function () {
        $('.myName').append('<span>Noah May</span>')
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
    $('button.addFriend').click(function () {
        let friend = myFriends.next().value
        if (!friend) {
            friend = 'Sorry, the rest of your friends left you for jQuery. ):'
            myFriends.next = () => ({
                value: 'You could just join them...'
            })
        }
        $('ul').append('<li>' + friend + '</li>')
    })
})