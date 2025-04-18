const edades = [12, 15, 18, 20, 25, 30, 35, 40]
const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad)
console.log(sumaEdades) // 195

const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Pedro', edad: 35 },
  { nombre: 'María', edad: 40 }
]
const sumaEdadesPersonas = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0)
// El segundo argumento es el valor inicial del acumulador, en este caso 0
console.log(sumaEdadesPersonas) // 130
console.log('El promedio de edad es: ', sumaEdadesPersonas / personas.length) // 32.5
// personas que superan el promedio de edad
const promedioEdad = sumaEdadesPersonas / personas.length
const personasMayoresPromedio = personas.filter(persona => persona.edad > promedioEdad)
console.log('Personas mayores al promedio de edad: ', personasMayoresPromedio) // [ { nombre: 'Pedro', edad: 35 }, { nombre: 'María', edad: 40 } ]
