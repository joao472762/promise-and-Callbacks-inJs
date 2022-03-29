//fs mean = fireSistean
//fs is't the native javaScript module
const fs = require('fs')



//callback mean = chamar de volta
//base sintaxe
/*function callback(err, cotetnt){
    console.log(err,String(cotetnt))
}*/

// advise: use callback inside of the another callback is not recomend
console.log(1)
console.log(2)
fs.readFile('./text01.txt',(err,content)=>{
    fs.readFile('./text02.txt',(err2,content2)=>{
        console.log(err,String(content));
        console.log(err2,String(content2))
    })
})
console.log(3)