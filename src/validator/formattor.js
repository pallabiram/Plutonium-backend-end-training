let text="         hello WORLD             "

let trim=function(){
    console.log("text:", text)
    console.log("trim text:", text.trim())
}
module.exports.gettrim=trim

let changetoLowerCase=function(){
    console.log("lowercase:", text.toLowerCase())

}
module.exports.getlowercase=changetoLowerCase

let changeToUpperCase=function(){
    console.log("uppercase:", text.toUpperCase()) 

}
module.exports.getuppercase=changeToUpperCase

