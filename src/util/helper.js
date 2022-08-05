const d=new Date()

let printDate=function(){
    console.log("Date:", d.getDate())

}
module.exports.getDate=printDate

let printMonth=function(){
    console.log("Month:", d.getMonth()+1)

}
module.exports.getMonth=printMonth

let getBatchInfo=function(){
    console.log("Plutonium, W3D5, the topic for today is Nodejs module system")

}
module.exports.printBatchInfo=getBatchInfo