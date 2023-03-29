const parray = [
   { nombre: "papa", edad: 2 }, 
   { nombre: "pepe", edad: 20 }
];

let parrayMap = parray.map((persona) => `🍼 ${persona.nombre}`)

parrayMap

// ******************************************

let nombre = "pepe";
let filtered = parray.filter((persona) => persona.nombre === nombre)

filtered 
