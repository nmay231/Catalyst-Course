// import './index.html'
import $ from 'jquery'

let faces: string[] = [
    'undefined',
    '\u2680',
    '\u2681',
    '\u2682',
    '\u2683',
    '\u2684',
    '\u2685',
]

class Die {

    static dice: Die[] = []
    static useUnicode: boolean = false

    private $div: JQuery
    private value: number

    constructor(private divId: number) {
        $('#dice-container').append(
            '<div id="' + this.divId + '"></div>'
        )
        this.$div = $('#' + this.divId)
        this.$div.addClass('dice text-center unselectable mb-2')
        this.$div.click(this.roll.bind(this))
        this.$div.dblclick(this.die.bind(this))
        this.value = 0
        this.roll()
        Die.dice.push(this)
        Die.updateSum()
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1
        this.updateFace()
        Die.updateSum()
    }

    updateFace() {
        if (Die.useUnicode) {
            this.$div.text(faces[this.value])
            this.$div.removeClass('border rounded')
        } else {
            this.$div.text(this.value)
            this.$div.addClass('border rounded')
        }
    }

    die() {
        Die.dice.splice(Die.dice.indexOf(this), 1)
        Die.updateSum()
        this.$div.remove()
    }

    static updateSum() {
        $('#sum-dice').text(
            'Sum of Dice: ' +
            Die.dice.reduce((acc, val) => acc + val.value, 0)
        )
    }

    static rollAll() {
        for (let die of Die.dice) {
            die.roll()
        }
        this.updateSum()
    }
}

$('#generate-dice').click(createDice())
$('#roll-dice').click(Die.rollAll.bind(Die))
for (let i = 0; i < 5; i++) {
    $('#generate-dice').click()
}

$('#use-unicode').change(function () {
    Die.useUnicode = !Die.useUnicode
    for (let die of Die.dice) {
        die.updateFace()
    }
})

$(document).keydown(function (e) {
    if (e.which === 16) {
        $('#check-box').toggle()
    }
})

function createDice() {
    let id = 0

    function callback() {
        new Die(id++)
    }
    return callback
}