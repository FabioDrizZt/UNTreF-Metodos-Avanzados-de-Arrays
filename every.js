// metodo every: permite saber si todos los elementos de un array cumplen con una condicion
const avengers = [
  { grupo: 'vengadores', nombre: 'Captain America', alias: 'Steve Rogers' },
  { grupo: 'vengadores', nombre: 'Iron Man', alias: 'Tony Stark' },
  { grupo: 'Liga del mal', nombre: 'Doctor Doom', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Thor', alias: 'Thor Odinson' },
  { grupo: 'vengadores', nombre: 'Hulk', alias: 'Bruce Banner' },
  { grupo: 'vengadores', nombre: 'Spider-Man', alias: 'Peter Parker' }
]

const sonTodosVengadores = avengers.every(avenger => avenger.grupo === 'vengadores')
// console.log(sonTodosVengadores ? 'Todos son Vengadores' : 'No todos son Vengadores')
console.log(`Todos${sonTodosVengadores ? '' : ' NO'} son Vengadores.`)
