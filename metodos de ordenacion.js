const numeros = [5, 3, 8, 1, 2, 7, 4, 6]
numeros.sort((a, b) => a - b) // Ordenar de menor a mayor
console.log(numeros) // [1, 2, 3, 4, 5, 6, 7, 8]
numeros.sort((a, b) => b - a) // Ordenar de mayor a menor
console.log(numeros) // [8, 7, 6, 5, 4, 3, 2, 1]
numeros.sort()// Ordenar de menor a mayor
console.log(numeros) // [1, 2, 3, 4, 5, 6, 7, 8]

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
// Ordenar por precio de menor a mayor
frutasObjetos.sort((a, b) => a.precio - b.precio)
console.log(frutasObjetos) // Ordenado por precio de menor a mayor
// Ordenar por precio de mayor a menor
frutasObjetos.sort((a, b) => b.precio - a.precio)
console.log(frutasObjetos) // Ordenado por precio de mayor a menor
// Ordenar por orden alfabetico descendente
frutasObjetos.sort((a, b) => a.nombre.localeCompare(b.nombre))
// ordenar en español con localCompare
frutasObjetos.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
console.log(frutasObjetos) // Ordenado por nombre de menor a mayor
frutasObjetos.sort((a, b) => b.nombre.localeCompare(a.nombre, 'es'))
console.log(frutasObjetos) // Ordenado por nombre de menor a mayor
frutasObjetos.sort((a, b) => a.nombre - b.nombre)
console.log(frutasObjetos) // Ordenado por nombre de menor a mayor
