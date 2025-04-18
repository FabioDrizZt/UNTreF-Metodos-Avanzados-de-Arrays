const frutas = [
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

const nombresFrutas = frutas.map(f => f.nombre)
console.log(nombresFrutas)

const preciosFrutasConInflacion = frutas.map((fruta) => {
  return { ...fruta, precio: fruta.precio * 1.2 } // Aumento del 20% en el precio
})
console.log(preciosFrutasConInflacion)
