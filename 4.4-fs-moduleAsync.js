const {readFile, writeFile} = require('fs')

// Requiere un callback porque no se sincroniza (similar a un eventlistener)
readFile('./4Modulo/first.txt', 'utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

//Para hacer lo mismo que de manera sincronizada: 
readFile('./4Modulo/first.txt', 'utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./4Modulo/second.txt', 'utf8', (err, result) =>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './4Modulo/PagGeneradaAsync.txt',
            `El resultado es el siguiente : ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
            }
        )
    })
})
