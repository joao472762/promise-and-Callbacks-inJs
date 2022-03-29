const fs = require('fs')

const readFile = (file = '') => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(String(contents))
        }
    })
})

const init = async() => {
    try{
        const xml1 = await readFile(`${__dirname}/text012.txt`)
        const xml2 = await readFile(`${__dirname}/text02.txt`)
        return {xml1, xml2}
    
    }
    catch(erro){
        console.error(erro)
    }
}
init().then(({xml1,xml2})=>{
    console.log(`${xml1}\n${xml2}`)
})
