const frutas = ['manzana', 'banana', 'naranja', 'kiwi', 'mango', 'kiwi']
const frutasEncontradas = frutas.find((fruta) => fruta === 'banana')
console.log(frutasEncontradas) // banana
const indexBanana = frutas.indexOf('banana')
console.log(indexBanana) // 1
console.log(frutas[indexBanana]) // banana

console.log(frutas.at(1)) // banana
console.log(frutas[1]) // banana
console.log(frutas.at(-1)) // mango
console.log(frutas[frutas.length - 1]) // mango

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
  { nombre: 'cereza', precio: 350, cantidad: 1 },
  { nombre: 'kiwi', precio: 500, cantidad: 10 }
]

const buscarPrimerKiwi = frutasObjetos.find((fruta) => fruta.nombre === 'kiwi')
console.log(buscarPrimerKiwi) // { nombre: 'kiwi', precio: 300, cantidad: 5 }
// FindIndex
const buscarPrimerKiwiIndex = frutasObjetos.findIndex((fruta) => fruta.nombre === 'kiwi')
console.log(buscarPrimerKiwiIndex) // 5
console.log(frutasObjetos[buscarPrimerKiwiIndex]) // { nombre: 'kiwi', precio: 300, cantidad: 5 };

// FindLast
const buscarUltimoKiwi = frutasObjetos.findLast((fruta) => fruta.nombre === 'kiwi')
console.log(buscarUltimoKiwi) // kiwi
// FindLastIndex
const buscarUltimoKiwiIndex = frutasObjetos.findLastIndex((fruta) => fruta.nombre === 'kiwi')
console.log(buscarUltimoKiwiIndex) // 10
console.log(frutasObjetos[buscarUltimoKiwiIndex]) // { nombre: 'kiwi', precio: 500, cantidad: 10 }
