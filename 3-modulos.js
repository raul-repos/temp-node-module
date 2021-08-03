// Modules
// Cada programita se guarda en un archivo distinto, un 'modulo'


// De esta manera todo está en el mismo archivo, sin modulos

// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log(`Hello there ${name}`)
// }

// sayHi('Susan')
// sayHi(john)
// sayHi(peter)

// Sin embargo, podemos separarlo en modulos para compartir solo lo mínimo entre ellos (3.1 y 3.2)

// Al usar require se importa lo que está puesto para exportar en esos modulos
const sayHi = require('./3.2-modulos')
const names = require('./3.1-modulos')

console.log(names)

sayHi(names.john)

