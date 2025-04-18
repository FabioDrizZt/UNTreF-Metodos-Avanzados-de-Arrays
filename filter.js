const frutas = [
  { nombre: 'Manzana', precio: 100, cantidad: 5, color: 'rojo' },
  { nombre: 'Banana', precio: 50, cantidad: 10, color: 'amarillo' },
  { nombre: 'Naranja', precio: 80, cantidad: 8, color: 'naranja' },
  { nombre: 'Pera', precio: 120, cantidad: 3, color: 'verde' },
  { nombre: 'Uva', precio: 200, cantidad: 2, color: 'morado' },
  { nombre: 'kiwi', precio: 300, cantidad: 5, color: 'verde' },
  { nombre: 'sandía', precio: 150, cantidad: 4, color: 'verde' },
  { nombre: 'mango', precio: 250, cantidad: 6, color: 'naranja' },
  { nombre: 'piña', precio: 180, cantidad: 7, color: 'amarillo' },
  { nombre: 'cereza', precio: 350, cantidad: 1, color: 'rojo' }
]

const frutasCaras = frutas.filter(f => f.precio > 150)
console.log(frutasCaras)

const frutasVerdes = frutas.filter(f => f.color === 'verde')
console.log(frutasVerdes)

const frutasRojas = frutas.filter(f => f.color === 'rojo')
console.log(frutasRojas)
