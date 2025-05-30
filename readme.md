# 🚀 Métodos Avanzados de Arrays en JavaScript

¡Bienvenido/a! Este repositorio contiene ejemplos prácticos y teoría sobre los métodos avanzados de arrays en JavaScript. Aquí aprenderás a manipular, transformar y analizar colecciones de datos de manera eficiente y moderna. Ideal para estudiantes de programación, docentes y cualquier persona que quiera dominar el manejo de arrays en JS. 📚✨

## 📋 Métodos tratados
- `forEach`
- `map`
- `filter`
- `reduce`
- `some`
- `every`
- `find`, `findIndex`, `findLast`, `findLastIndex`, `at`, `indexOf`
- `flat`
- Métodos de ordenación: `sort`

---

## 🔄 forEach
Permite ejecutar una función para cada elemento del array. Es ideal para recorrer y realizar acciones, pero **no retorna un nuevo array**.

```js
articulos.forEach((articulo) => {
  console.log(articulo.nombre)
})
```

## 🗺️ map
Crea un **nuevo array** con los resultados de aplicar una función a cada elemento.

```js
const nombresFrutas = frutas.map(f => f.nombre)
console.log(nombresFrutas)
```

## 🔍 filter
Genera un **nuevo array** con los elementos que cumplen una condición.

```js
const frutasCaras = frutas.filter(f => f.precio > 150)
console.log(frutasCaras)
```

## ➕ reduce
Reduce el array a un solo valor, aplicando una función acumuladora.

```js
const sumaEdades = edades.reduce((acum, edad) => acum + edad)
console.log(sumaEdades)
```

## ❓ some
Verifica si **al menos un elemento** cumple con la condición.

```js
const hayKiwi = frutas.some(f => f.nombre === 'kiwi')
console.log(hayKiwi)
```

## ✅ every
Verifica si **todos los elementos** cumplen con la condición.

```js
const todosSonVengadores = avengers.every(a => a.grupo === 'vengadores')
console.log(todosSonVengadores)
```

## 🔎 find, findIndex, findLast, findLastIndex, at, indexOf
- `find`: Devuelve el **primer elemento** que cumple la condición.
- `findIndex`: Devuelve el **índice** del primer elemento que cumple la condición.
- `findLast` y `findLastIndex`: Buscan desde el final del array.
- `at`: Accede a un elemento por posición (soporta índices negativos).
- `indexOf`: Devuelve el índice de la primera ocurrencia de un valor.

```js
const primerKiwi = frutas.find(f => f.nombre === 'kiwi')
const indiceBanana = frutas.indexOf('banana')
const ultimoKiwi = frutas.findLast(f => f.nombre === 'kiwi')
console.log(primerKiwi, indiceBanana, ultimoKiwi)
```

## 🪆 flat
Aplana arrays anidados en un solo nivel.

```js
const verduleria = [frutas, verduras]
console.log(verduleria.flat())
```

## 🔢 Métodos de ordenación: sort
Permite ordenar los elementos de un array según una función de comparación.

```js
numeros.sort((a, b) => a - b) // Ordena de menor a mayor
frutas.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es')) // Ordena alfabéticamente
```

---

## 🧑‍💻 Créditos
Repositorio realizado para la materia **Métodos Avanzados de Arrays** - UNTREF. Ejemplos y teoría por el equipo docente. ¡A practicar! 💪
