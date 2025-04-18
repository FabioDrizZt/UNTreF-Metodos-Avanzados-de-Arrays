const articulos = [
  {
    id: 452452,
    nombre: 'Celular Samsung S24',
    precio: 1000,
    cantidad: 5,
    categoria: 'Celulares'
  },
  {
    id: 452452,
    nombre: 'Celular Motorola G100',
    precio: 800,
    cantidad: 3,
    categoria: 'Celulares'
  },
  {
    id: 78642,
    nombre: 'Notebook HP',
    precio: 1500,
    cantidad: 2,
    categoria: 'Notebooks'
  },
  {
    id: 785752,
    nombre: 'Monitor LG',
    precio: 300,
    cantidad: 4,
    categoria: 'Monitores'
  },
  {
    id: 785456,
    nombre: 'Mouse Logitech',
    precio: 50,
    cantidad: 10,
    categoria: 'Perifericos'
  },
  {
    id: 785456,
    nombre: 'Teclado Logitech',
    precio: 80,
    cantidad: 8,
    categoria: 'Perifericos'
  },
  {
    id: 785456,
    nombre: 'Auriculares Sony',
    precio: 100,
    cantidad: 6,
    categoria: 'Perifericos'
  },
  {
    id: 785456,
    nombre: 'Parlantes JBL',
    precio: 150,
    cantidad: 4,
    categoria: 'Perifericos'
  }
]

function forEachArticulos (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    callback(element)
  }
}

function mostrarArticulo (articulo) {
  console.log(articulo.nombre)
  console.log(articulo.precio)
  console.log(articulo.cantidad)
  console.log(articulo.categoria)
}

forEachArticulos(articulos, mostrarArticulo)

articulos.forEach((articulo) => {
  console.log('--------------------------')
  console.log(`ID del articulo: ${articulo.id}`)
  console.log(`Nombre del articulo: ${articulo.nombre}`)
  console.log(`Precio del articulo: ${articulo.precio}`)
  console.log(`Cantidad del articulo: ${articulo.cantidad}`)
  console.log(`Categoria del articulo: ${articulo.categoria}`)
})

articulos.forEach((articulo, index, arr) => {
  // precioConDescuento = articulo.precio - (articulo.precio * 0.1)
  console.log('--------------------------')
  const precioConDescuento = articulo.precio * 0.9 // Aplicando un 10% de descuento
  console.log(`ID del articulo: ${index + 1}`)
  console.log(`Precio con descuento del articulo ${articulo.nombre}: ${precioConDescuento}`)
  console.log(`Precio original del articulo ${articulo.nombre}: ${articulo.precio}`)
  console.log(`El siguiente articulo es: ${arr[index + 1] ? arr[index + 1].nombre : 'No hay mas articulos'}`)
})

const articulosConDescuento = []
articulos.forEach((articulo) => {
  articulosConDescuento.push({ ...articulo, precioConDescuento: articulo.precio * 0.9 })
})

console.log(articulosConDescuento)
