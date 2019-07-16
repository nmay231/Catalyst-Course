const GENERIC_SHAPE = 'generic'
const SQUARE = 'square'
const RECTANGLE = 'rectangle'
const CIRCLE = 'circle'
const TRIANGLE = 'triangle'

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
        this.$div.click(shapeInfo(this.describe.bind(this)))
        this.$div.dblclick(this.removeSelf.bind(this))
    }

    describe() {
        return {
            type: this.type,
            width: this.width,
            height: this.height,
            area: this.area,
            perimeter: this.perimeter,
            radius: this.radius,
            circumference: this.circumference,
        }
    }

    removeSelf() {
        this.$div.remove()
        shapeInfo(null, true)
        delete this
    }

    get area() {
        return this.height * this.width
    }

    get perimeter() {
        return 2 * this.height + 2 * this.width
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
    constructor(divId, radius) {
        super(divId, radius * 2, radius * 2)
        this.type = CIRCLE
        this.radius = radius
        this.$div.addClass('circle rounded-circle')
    }

    describe() {
        // Ignore width and height attributes
        return {
            ...super.describe(),
            height: undefined,
            width: undefined,
            perimeter: undefined, // Use circumference instead
        }
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    get circumference() {
        return 2 * Math.PI * this.radius
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

    get area() {
        return 0.5 * this.height ** 2
    }

    get perimeter() {
        return (2 + 2 ** 0.5) * this.height
    }
}

let genericShape = {
    describe: () => ({
        type: 'The Canvas',
        width: 600,
        height: 600,
        area: 600 ** 2,
        perimeter: 600 * 4,
        radius: undefined,
        circumference: undefined,
    })
}

function shapeInfo(describe) {
    if (describe === null) {
        describe = genericShape.describe.bind(genericShape)
        callback()
        return
    }

    function callback(e) {
        let info = describe()
        for (let attr in info) {
            if (attr === 'type') {
                $('#info-type').text(info.type)
                $('#info-type').parent().show()
            } else if (info[attr] !== undefined) {
                $('#info-' + attr).text(Math.round(info[attr]))
                $('#info-' + attr).parent().show()
            } else {
                $('#info-' + attr).parent().hide()
            }
        }
    }
    return callback
}

function shapesCreator() {
    let shapeType
    let index = 0

    function adjust(val, max) {
        if (val < 25) {
            return 25
        } else if (val > max) {
            return max
        }
        return val
    }

    function createShape() {
        let size1 = adjust($('#size1-input').val(), winWidth)
        let size2 = adjust($('#size2-input').val(), winHeight)

        switch (shapeType) {
            case RECTANGLE:
                new Rectangle(index++, size1, size2)
                break
            case SQUARE:
                new Square(index++, size1)
                break
            case CIRCLE:
                size1 = adjust(size1, winWidth / 2)
                new Circle(index++, size1)
                break
            case TRIANGLE:
                new Triangle(index++, size1)
                break
        }
    }

    function changeSection(type, currentSection) {
        $('.nav-link').removeClass('active')
        $(currentSection).addClass('active')
        $('#size1-input').focus()
        $('#add-to-canvas').text('add ' + type + ' to canvas')
        shapeType = type
    }
    return [createShape, changeSection]
}

$(document).ready(function () {
    let [createShape, changeSection] = shapesCreator()

    $('#square-section').click(function (e) {
        changeSection(SQUARE, this)
        $('#size1-label').text('Side Length')
        $('#size2').css('visibility', 'hidden')
    })
    $('#rectangle-section').click(function (e) {
        changeSection(RECTANGLE, this)
        $('#size1-label').text('Width')
        $('#size2').css('visibility', 'visible')
    })
    $('#circle-section').click(function (e) {
        changeSection(CIRCLE, this)
        $('#size1-label').text('Radius')
        $('#size2').css('visibility', 'hidden')
    })
    $('#triangle-section').click(function (e) {
        changeSection(TRIANGLE, this)
        $('#size1-label').text('Base Length')
        $('#size2').css('visibility', 'hidden')
    })

    $('#square-section').click()
    $('#size1-input').val(150)
    $('#size2-input').val(75)
    $('#size1-input').focus()
    shapeInfo(null)

    $('#canvas').click((e) => {
        if (e.target.id === 'canvas') {
            shapeInfo(null)
        }
    })
    $('#add-to-canvas').click(function (e) {
        createShape()
        return false // Prevent page reload
    })
})