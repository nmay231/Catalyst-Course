const SPACE = 'space'
const NEWLINE = 'newline'
const CORRECT = true
const INCORRECT = false

let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate',
]

let state

$(document).ready(function () {

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

    $('#load-btn').focus()
    $('#load-btn').click(function () {
        $('#greeter').hide()
        setupState()
        setupGame()
    })

    $('#reset-btn').click(function () {
        $('#end-game').hide()
        setupState()
        setupGame()
    })
})

function setupState() {
    state = {
        accurateWord: true,
        correct: 0,
        incorrect: 0,

        row: 0,
        col: 0,
        missedChar: 0,
        startTime: null,
        minutes: null,
    }
}

function setupGame() {
    $('#target-letter').text(sentences[state.row][state.col])
    $('#sentence').text(sentences[0])
    $('#prompt-container').slideDown()

    $(document).on('keypress', async function (e) {
        if (e.which < 32 || e.which > 126) {
            return
        }

        let result = userTyped(String.fromCharCode(e.which))
        let gly

        if (result !== NEWLINE) {
            switch (result) {
                case SPACE:
                    gly = 'glyphicon-minus'
                    break
                case CORRECT:
                    gly = 'glyphicon-ok'
                    break
                case INCORRECT:
                    gly = 'glyphicon-remove'
                    break
            }
            $('#feedback').append($('<span class="glyphicon ' + gly + '"></span>'))
        }

        $('#' + e.which).css(
            'background-color',
            result ? 'lightgreen' : 'red'
        )
        await sleep(125)
        $('#' + e.which).css('background-color', '#f5f5f5')
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function userTyped(key) {
    let sentence = sentences[state.row]
    let char = sentence[state.col++]

    let returnVal
    // This purposely does not check for incorrect spaces (I'm being nice)
    if (char === ' ') {
        if (state.accurateWord) {
            state.correct++
        } else {
            state.incorrect++
        }
        state.accurateWord = true
        returnVal = SPACE
    } else if (key === char) {
        returnVal = CORRECT
    } else {
        state.accurateWord = false
        state.missedChar++
        returnVal = INCORRECT
    }

    shiftYellow()

    if (state.col >= sentence.length) {
        shiftYellow(reset = true)

        sentence = sentences[++state.row]
        state.col = 0

        $('#sentence').text(sentence)
        $('#feedback').html('')

        if (state.accurateWord) {
            state.correct++
        } else {
            state.incorrect++
        }
        state.accurateWord = true
        returnVal = NEWLINE
    }

    if (state.row >= sentences.length) {
        $(document).off('keypress')
        endGame()
    } else {
        $('#target-letter').text(sentence[state.col].replace(' ', '<space>'))
    }

    return returnVal
}

function endGame() {
    state.minutes = (Date.now() - state.startTime) / 1000 / 60

    $('#score').html(
        '<h4>Your final score: ' +
        Math.round((sentences.join(' ')).split(' ').length / state.minutes - 2 * state.missedChar) +
        ' (words per minute)</h4>' +
        '<h4>Number of correct words: ' + state.correct + '. Incorrect: ' + state.incorrect +
        '. Character mistakes: ' + state.missedChar + '</h4>'
    )

    $('#prompt-container').slideUp(200)
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
    await sleep(100)
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