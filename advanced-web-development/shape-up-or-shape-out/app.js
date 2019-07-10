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
        this.$div.on('click', removeSelf) // This makes the div dissappear
    }

    describe() {}

    removeSelf() {
        alert()
        this.$div.remove()
        delete this
    }
}

// With the way I structured styles, it makes more sense for square to inherit directly from Shape()
class Square extends Shape {
    constructor(divId, size) {
        super(divId, size, size)
        this.type = SQUARE
        this.$div.addClass('square')
    }
}

class Rectangle extends Shape {
    constructor(divId, width, height) {
        super(...arguments)
        this.type = RECTANGLE
        this.$div.addClass('rectangle')
    }
}

class Circle extends Shape {
    constructor(divId, diameter) {
        super(divId, diameter, diameter)
        this.type = CIRCLE
        this.$div.addClass('circle rounded-circle')
    }
}

class Triangle extends Shape {
    static borders = [
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
    ]
    constructor(divId, size) {
        super(divId, size, size)
        this.type = TRIANGLE
        this.$div.addClass('triangle')
        this.$div.css({
            height: 0,
            width: 0,
            'border-width': size / 2,
        })
        // Because who wants the same boring triangle?
        let direction = Math.floor(Math.random() * 4)
        this.$div.css(Triangle.borders[direction], 'transparent')
        this.$div.css(Triangle.borders[(direction + 1) % 4], 'transparent')
    }
}

function shapesCreator() {
    let shapeType
    let index = 0

    function createShape() {
        let New
        switch (shapeType) {
            case RECTANGLE:
                new Rectangle(
                    index++,
                    $('#size1-input').val(),
                    $('#size2-input').val(),
                )
                return
            case SQUARE: //Change this to be clearly-- it doesn't need to have a few less lines
                New = Square
                break
            case CIRCLE:
                New = Circle
                break
            case TRIANGLE:
                New = Triangle
                break
        }
        new New(
            index++,
            $('#size1-input').val(),
        )
    }

    function changeShape(type, container) {
        $('.nav-link').removeClass('active')
        $(container).addClass('active')
        $('#add-to-canvas').text('add ' + type + ' to canvas')
        shapeType = type
    }
    return [createShape, changeShape]
}

$(document).ready(function () {
    let [createShape, changeShape] = shapesCreator()

    $('#square-section').click(function (e) {
        changeShape(SQUARE, this)
        $('#size1-label').text('Side Length')
        $('#size2').css('visibility', 'hidden')
    })
    $('#rectangle-section').click(function (e) {
        changeShape(RECTANGLE, this)
        $('#size1-label').text('Width')
        $('#size2').css('visibility', 'visible')
    })
    $('#circle-section').click(function (e) {
        changeShape(CIRCLE, this)
        $('#size1-label').text('Radius')
        $('#size2').css('visibility', 'hidden')
    })
    $('#triangle-section').click(function (e) {
        changeShape(TRIANGLE, this)
        $('#size1-label').text('Base Length')
        $('#size2').css('visibility', 'hidden')
    })

    $('#square-section').click()
    $('#size1-input').val(200)
    $('#size2-input').val(100)
    $('#size1-input').focus()

    $('#add-to-canvas').click(function (e) {
        createShape()
        return false // Prevent page reload
    })
})