//! 1 Crear único objeto literal

let man = {
    age: 21,
    height: 170
}

man


//! 2 Eliminar propiedad de objeto

delete man.age;

man

//! 3 Cambiar propiedad de objeto

man.height = 4;

man

//! 4 Agregar propiedad de objeto

man.weight = 400;

man


//! 5 Crear objeto con una función

function Car (color, year) {
    this.color = color;
    this.year = year;
    this.price = 2000000
}

const audi = new Car("red", 2020)
audi

const fiat = new Car("yellow", 2010)
fiat


//! 6 Crear objetos vacíos con new Object

const ArgentinaSinInflacion = new Object();

ArgentinaSinInflacion.existe = false
ArgentinaSinInflacion.futuro = "jajaja"

ArgentinaSinInflacion


//! 7 Crear objeto desde objeto con object create

const paisGeneroso = Object.create(ArgentinaSinInflacion)

ArgentinaSinInflacion

//! 8 POO Crear clase (EcmaScript 6)

class Pet {
    constructor(legs,lifeExpectation, sound) {
        this.legs = legs;
        this.lifeExpectation = lifeExpectation;
        this.sound = sound;
    }

    // Método
    call() {
        console.log("hey");
    }
}

const cat = new Pet(4, 15, "meaow")
cat
cat.call()

//! 9 Herencia

class Cat extends Pet {
    constructor(legs,lifeExpectation, sound, nails) {
        super(legs,lifeExpectation, sound);
        this.nails = nails;
    }    
}

const miGata = new Cat(3,4,5,"rasguñan")

miGata
miGata.call()