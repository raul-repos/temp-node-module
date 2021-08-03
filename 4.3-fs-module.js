const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./4Modulo/first.txt', 'utf8')
const second = readFileSync('./4Modulo/second.txt', 'utf8')

//console.log(first, second)

writeFileSync('./4Modulo/PagGenerada.txt', `El resultado es: ${first}, ${second}`)
//Esto genera un archivo, pero no puede generar el directorio en el que se ubica (aka la carpeta)