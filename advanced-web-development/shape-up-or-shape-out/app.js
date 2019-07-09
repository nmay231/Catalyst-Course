const GENERIC_SHAPE = 'generic'
const SQUARE = 'square'
const RECTANGLE = 'rectangle'
const CIRCLE = 'circle'
const TRIANGLE = 'traiangle'

const winHeight = 600
const winWidth = 600

class Shape {
    constructor(divId, width, height) {
        this.type = GENERIC_SHAPE
        this.width = width
        this.height = height

        this.divId = divId
        this.$div = $('<div id="' + this.divId + '"></div>')
        this.$div.addClass('shape')
        this.$div.css({
            width,
            height,
            'margin-left': Math.floor(Math.random() * (winWidth - width)),
            'margin-top': Math.floor(Math.random() * (winHeight - height)),
        })
        $('#canvas').append(this.$div)
    }
}

class Square extends Shape {
    constructor(divId, size) {
        super(divId, size, size)
        this.$div.addClass('square')
    }
}

class Rectangle extends Shape {
    constructor(divId, width, height) {
        super(...arguments)
        this.$div.addClass('rectangle')
    }
}

class Circle extends Shape {
    constructor(divId, diameter) {
        super(divId, diameter, diameter)
        this.$div.addClass('circle rounded-circle')
    }
}

class Triangle extends Shape {
    constructor(divId, size) {
        super(divId, size, size)
        this.$div.addClass('triangle')
        this.$div.css({
            border: size / 2 + 'px rgba(255, 255, 0, 0.7) solid',
            'border-top-color': 'transparent',
            'border-right-color': 'transparent',
        })
    }
}

$(document).ready(function () {
    new Triangle(0, 100)
})