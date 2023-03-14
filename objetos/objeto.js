//! 1 Crear único objeto literal

let man = {
  age: 21,
  height: 170,
};

man;

//! 2 Eliminar propiedad de objeto

delete man.age;
man;
console.log(man.age);

//! 3 Cambiar propiedad de objeto

man.height = 4;

man;

//! 4 Agregar propiedad de objeto

man.weight = 400;

man;

//! 5 Crear objeto con una función

function Car(color, year) {
  this.color = color;
  this.year = year;
  this.price = 2000000;
}

const audi = new Car("red", 2020);
audi;

const fiat = new Car("yellow", 2010);
fiat;

//! 6 Instancias
console.log(fiat instanceof Car);

//! 7 Crear objetos vacíos con new Object

const ArgentinaSinInflacion = new Object();

ArgentinaSinInflacion.existe = false;
ArgentinaSinInflacion.futuro = "jajaja";

ArgentinaSinInflacion;

//! 8 Crear objeto desde objeto con object create

const paisGeneroso = Object.create(ArgentinaSinInflacion);

ArgentinaSinInflacion;

//! 9 POO Crear clase (EcmaScript 6)

function Car(color, year) {
  this.color = color;
  this.year = year;
  this.price = 2000000;
}

class Pet {
  constructor(legs, lifeExpectation, sound) {
    this.legs = legs;
    this.lifeExpectation = lifeExpectation;
    this.sound = sound;
  }

  // Método
  call() {
    console.log("hey");
  }
}

const cat = new Pet(4, 15, "meaow");
cat;
cat.call();

//! 10 Herencia

class Cat extends Pet {
  constructor(legs, lifeExpectation, sound, nails) {
    super(legs, lifeExpectation, sound);
    this.nails = nails;
  }
}

const miGata = new Cat(3, 4, 5, "rasguñan");

miGata;
miGata.call();

/////////////////////////////////////////////////////////

// CONSIGNA hacer 4 objetos que tengan estos valores de propiedades
age: 20;
height: 200;

// agregarle una propiedad name individual

class Estudiante {
  constructor(name) {
    this.age = 20;
    this.height = 200;
    this.name = name;
  }
}

/* let Sol = new Estudiante("Sol");

Sol;

let Nadir = new Estudiante("Nadir");

Nadir;
 */
/////////////////////////////////////////////

class Animal {
    constructor(especie) {
        this.especie = especie;
        this.size = "50 pulgadas"
    }
}

let Puma = new Animal("felino")

Puma

class Voladores extends Animal {
    constructor(especie, alados) {
        super(especie);
        this.alados = alados;
    }
}

let Aguila = new Voladores("aereo", true)

Aguila


let elobjeto = {
    age: 20,
    size: 80
}

delete elobjeto.size

elobjeto


const objetitito = {
    age: 20,
    size: 80,
    weight: 1,
    gender: "fluid",
    country: "Nnon"
}

/* objetitito.weight */

const { age, size, weight, ...rest } = objetitito
rest
const restMoreAge = { ...rest, age }

restMoreAge

const asrramel = [1,2,0]