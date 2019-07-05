let sentences = [
    'asdf asdf asdf asdf asdf asdfasdf',
    // 'asdf ASDF ASDF ASDF ASDFASDF ASDF',
    // 'asdfasdfasdfasdf',
    // 'ten ate neite ate nee enet ite ate inet ent eate',
    // 'Too ato too nOt enot one totA not anot tOO aNot',
    // 'oat itain oat tain nate eate tea anne inant nean',
    // 'itant eate anot eat nato inate eat anot tain eat',
    // 'nee ene ate ite tent tiet ent ine ene ete ene ate',
]

let state

function setupState() {
    state = {
        row: 0,
        col: 0,
        accurateWord: true,
        correct: 0,
        incorrect: 0,
        missedChar: 0,
        startTime: null,
        minutes: undefined,
    }
}

function setupGame() {
    $('#target-letter').text(sentences[state.row][state.col])
    $('#sentence').text(sentences[0])
    $('#prompt-container').slideDown()

    // Handle key highlighting
    $(document).on('keypress', async function (e) {
        if (e.which < 32 || e.which > 126) {
            return
        }
        let success = userTyped(String.fromCharCode(e.which))

        let gly
        if (success !== 'newline') {
            gly = {
                true: 'glyphicon-ok',
                false: 'glyphicon-remove',
                'space': 'glyphicon-minus',
            } [success]
            $('#feedback').append($('<span class="glyphicon ' + gly + '"></span>'))
        }

        $('#' + e.which).css(
            'background-color',
            success ? 'lightgreen' : 'red'
        )
        await sleep(125)
        $('#' + e.which).css('background-color', '#f5f5f5')
    })
}

$(document).ready(async function () {
    setupState()
    setupGame()

    $(document).keydown(function (e) {
        if (state.startTime === null) {
            state.startTime = Date.now()
        }
        if (e.which == 16) {
            $('#keyboard-lower-container').hide()
            $('#keyboard-upper-container').show()
        }
    })

    $(document).keyup(function (e) {
        if (e.which == 16) {
            $('#keyboard-lower-container').show()
            $('#keyboard-upper-container').hide()
        }
    })

    $('#reset-btn').click(function () {
        $('#end-game').hide()
        setupState()
        setupGame()
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function userTyped(key) {
    console.log(state, sentences[state.row][state.col])
    let sentence = sentences[state.row]
    let char = sentence[state.col++]

    let returnVal
    // This purposely does not check spaces (I'm being nice)
    if (char === ' ') {
        if (state.accurateWord) {
            state.correct++
        } else {
            state.incorrect++
        }
        state.accurateWord = true
        shiftYellow()
        returnVal = 'space'
    } else if (key === char) {
        shiftYellow()
        returnVal = true
    } else {
        shiftYellow()
        state.accurateWord = false
        state.missedChar++
        returnVal = false
    }

    if (state.col >= sentence.length) {
        shiftYellow(reset = true)
        sentence = sentences[++state.row]
        $('#sentence').text(sentence)
        state.col = 0
        if (state.accurateWord) {
            state.correct++
        } else {
            state.incorrect++
        }
        state.accurateWord = true
        $('#feedback').html('')
        returnVal = 'newline'
    }
    if (state.row >= sentences.length) {
        $(document).off('keypress')
        endGame()
        return returnVal
    }
    $('#target-letter').text(sentence[state.col].replace(' ', '\<space\>')) //does this need to change

    return returnVal
}

function endGame() {
    state.minutes = (Date.now() - state.startTime) / 1000 / 60
    $('#prompt-container').slideUp(200)
    $('#score').html(
        '<p>Your final score: ' +
        Math.round((sentences.join(' ')).split(' ').length / state.minutes - 2 * state.missedChar) +
        ' (words per minute)</p>' +
        '<p>Number of correct words: ' + state.correct + '. Incorrect: ' + state.incorrect +
        '. Character mistakes: ' + state.missedChar + '</p>'
    )
    $('#end-game').slideDown()
    $('#reset-btn').focus()
    $(document).on('keypress', async function (e) {
        if (e.which < 32 || e.which > 126) {
            return
        }

        let rainbow = [
            'purple',
            'blue',
            'green',
            'yellow',
            'orange',
            'red',
        ]

        // Change to random color
        $('#' + e.which).css(
            'background-color',
            rainbow[Math.floor(Math.random() * rainbow.length)]
        )
        await sleep(125)
        $('#' + e.which).css('background-color', '#f5f5f5')
    })
    makeRainbow()
}

async function makeRainbow() {
    for (let i = 0; i < 200; i++) {
        console.log('test')
        await sleep(15)
        jQuery.event.trigger({
            type: 'keypress',
            which: Math.floor(Math.random() * 90) + 32
        })
    }
}

function shiftYellow(reset = false) {
    if (reset) {
        $('#yellow-block').animate({
            'marginLeft': '0px'
        }, 200)
    } else {
        $('#yellow-block').animate({
            'marginLeft': '+=17.4px'
        }, 75)
    }
}