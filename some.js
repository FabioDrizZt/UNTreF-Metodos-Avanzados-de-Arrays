const avengers = [
  { grupo: 'vengadores', nombre: 'Captain America', alias: 'Steve Rogers' },
  { grupo: 'vengadores', nombre: 'Iron Man', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Doctor Doom', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Thor', alias: 'Thor Odinson' },
  { grupo: 'vengadores', nombre: 'Hulk', alias: 'Bruce Banner' },
  { grupo: 'vengadores', nombre: 'Spider-Man', alias: 'Peter Parker' }
]

const estaTonyStark = avengers.some(avenger => avenger.alias === 'Tony Stark')
// console.log(estaTonyStark ? 'Tony Stark está en el grupo de Vengadores' : 'Tony Stark no está en el grupo de Vengadores')
console.log(`Tony Stark ${estaTonyStark ? '' : 'NO'} está en el grupo de Vengadores.`)
