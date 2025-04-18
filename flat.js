const frutasObjetos = [
  { nombre: 'Manzana', precio: 100, cantidad: 5 },
  { nombre: 'Banana', precio: 50, cantidad: 10 },
  { nombre: 'Naranja', precio: 80, cantidad: 8 },
  { nombre: 'Pera', precio: 120, cantidad: 3 },
  { nombre: 'Uva', precio: 200, cantidad: 2 },
  { nombre: 'kiwi', precio: 300, cantidad: 5 },
  { nombre: 'sandía', precio: 150, cantidad: 4 },
  { nombre: 'mango', precio: 250, cantidad: 6 },
  { nombre: 'piña', precio: 180, cantidad: 7 },
  { nombre: 'cereza', precio: 350, cantidad: 1 }
]

const verdurasObjetos = [
  { nombre: 'lechuga', precio: 50, cantidad: 10 },
  { nombre: 'tomate', precio: 80, cantidad: 8 },
  { nombre: 'zanahoria', precio: 30, cantidad: 5 },
  { nombre: 'pepino', precio: 40, cantidad: 6 },
  { nombre: 'pimiento', precio: 60, cantidad: 4 }
]

const verduleria = [
  frutasObjetos,
  verdurasObjetos
]

console.log(verduleria.flat()) // Aplana el array de arrays en un solo array

// Clonar un array
const frutasObjetosClon = [...frutasObjetos]
console.log(frutasObjetosClon) // Clona el array de frutasObjetos