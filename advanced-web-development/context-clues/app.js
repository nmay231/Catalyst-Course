// I purposely chose prime number lengths to allow for random generation each time
var friends = [ // five
    'Billy',
    'Brenda',
    'Bob',
    'Bethany',
    'Bartholomew',
]

var locations = [ // eleven
    'Dining room',
    'Bedroom',
    'Living room',
    'Kitchen',
    'Sun room',
    'Bathroom',
    'Closet',
    'One place you would never expect',
    'Fireplace',
    'Antique dresser',
    '"Real World"',
]

var weapons = [ // nineteen
    'pinata!',
    'rubber band',
    'flimsy sunglasses',
    'post-it notes',
    'USB stick',
    'guitar stand',
    'lightsaber', // here you go, Luke
    'hypothetical transdimentional toothpick',
    'dental floss',
    'flossing dance move',
    'toothbrush from Grandpa\'s bucket',
    'neighbor\'s bluecheese',
    'soggy dog toy',
    'last guy\'s head',
    'shovel out back',
    'clown from It',
    '"children\'s" toys',
    'Barne themesong',
    'Windows OS processes',
]

// This makes the accusation generation random each time
var multiplier = max => Math.floor(Math.random() * (max - 1)) + 1
var scalers = {
    friend: multiplier(friends.length),
    loc: multiplier(locations.length),
    weapon: multiplier(weapons.length),
}
var shift = multiplier(20) // exact value doesn't matter

$(document).ready(function () {
    console.group('Logged accusations for your convenience:')

    for (var i = 1; i <= 100; i++) {
        var friend = friends[(i * scalers.friend + shift) % friends.length]
        var loc = locations[(i * scalers.loc + shift) % locations.length]
        var weapon = weapons[(i * scalers.weapon + shift) % weapons.length]

        var h3 = $('<h3>Accusation ' + i + '</h3>')
        h3.click(alertAccusation(i, friend, loc, weapon))
        $('body').append(h3)
    }

    console.groupEnd()
})

function alertAccusation(i, friend, loc, weapon) {
    console.log(
        'Accusation ' + i + ': ' +
        'I accuse ' + friend +
        ', with the ' + weapon +
        ' in the ' + loc + '!'
    )

    function callback() {
        alert(
            'Accusation ' + i + ': ' +
            'I accuse ' + friend +
            ', with the ' + weapon +
            ' in the ' + loc + '!'
        )
    }
    return callback
}