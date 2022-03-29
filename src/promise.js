const fs = require('fs')
const { dirname, resolve } = require('path')
//promise
//sixtaxe below

/*let Cars = (viriable) => new Promise((resolve,reject)=>{
    if("dosen't happen "){
        reject()
    }
    else{
        resolve()
    }
})
Cars("variableToBeFetch").
then(result =>{
    return result
})*/



const readFile = (file = '') => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(contents)
        }
    })
})

readFile(`${__dirname}/text01.txt`)
    .then(fileContent => {
        console.log(String(fileContent))
        xml = String(fileContent)
        return readFile(`${__dirname}/text02.txt`)
    })
    .then(fileContent => {
        console.log(String(fileContent))
    })


const newPromise = readFile(`${__dirname}/text01.txt`)
setTimeout(()=>{
    console.log(newPromise)
    console.log('hello')
},3000)