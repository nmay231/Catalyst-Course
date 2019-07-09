let person1 = {
    name: 'David',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person2 = {
    name: 'Marcie',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person3 = {
    name: 'Ashley',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person4 = {
    name: 'Meagan',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person5 = {
    name: 'Noah',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

// person1.sayHello()
// person2.sayHello()
// person3.sayHello()
// person4.sayHello()
// person5.sayHello()


// function Person(name, city, age) {
//     this.name = name
//     this.city = city
//     this.age = age
// }

// Person.prototype.greet = function () {
//     console.log(
//         `Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}` +
//         '\nWhy am I telling you this again?'
//     )
// }

class Person {
    constructor(name, city, age) {
        this.name = name
        this.city = city
        this.age = age
    }

    greet() {
        console.log(`My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`)
    }
}

person1 = new Person('David', 'ABQ', Infinity)
person2 = new Person('Marcie', 'ABQ', Infinity)
person3 = new Person('Ashley', 'ABQ', Infinity)
person4 = new Person('Meagan', 'ABQ', Infinity)
person5 = new Person('Noah', 'Purgatory', Infinity)

// person1.greet()
// person2.greet()
// person3.greet()
// person4.greet()
// person5.greet()



// Vehicles

class Vehicle {
    constructor(manufacturer, model = null, wheels = 4) {
        this.manufac = manufacturer
        this.wheels = wheels
        this.model = model || 'Generic Vehicle'
    }

    aboutVehicle() {
        console.log(`Manufacturer: ${this.manufac}. Model: ${this.model}. # of wheels: ${this.wheels}`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, model = null, wheels = 4, doors = 4, truckBed = true) {
        super(manufacturer, wheels)
        this.model = model || 'Truck Model'
        this.doors = doors
        this.truckBed = truckBed
    }

    aboutVehicle() {
        super.aboutVehicle()
        console.log(`# of doors: ${this.doors}. Has truckbed: ${this.truckBed}`)
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, model = null, wheels = 4, doors = 4, size = 'medium', mpg = 25) {
        super(manufacturer, wheels)
        this.model = model || 'Sedan Model'
        this.doors = doors
        this.size = size
        this.mpg = mpg
    }

    aboutVehicle() {
        super.aboutVehicle()
        console.log(`# of doors: ${this.doors}. Size: ${this.size}. MPG: ${this.mpg}`)
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, model = null, wheels = 2, doors = 0, handlebars = true) {
        super(manufacturer, wheels)
        this.model = model || 'Motorcycle Model'
        this.doors = doors
        this.handlebars = handlebars
    }

    aboutVehicle() {
        super.aboutVehicle()
        console.log(`# of doors: ${this.doors}. Has handlebars: ${this.handlebars}`)
    }
}

let object
for (let Vec of [Vehicle, Truck, Sedan, Motorcycle]) {
    object = new Vec('Generic Manufacturer')
    object.aboutVehicle()
}