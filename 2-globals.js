// Globals - NO WINDOW !!!
//Solo se usa el terminal en node.js

// __dirname    - el path de la carpeta actual
// __filename   - el nombre del archivo
// require      - función para usar modulos (CommonJS)
// module       - Info del actual modulo (file)
// process      - info del environment en el que el programa se ejecuta

console.log(process)
setInterval(() => {
    console.log(`Hello world`)
}, 1000);