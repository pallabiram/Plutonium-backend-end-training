const { response } = require('express');
const lodash=require('lodash')
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const linkLogger=require('../logger/logger')
const linkhelper=require('../util/helper')
const linkformattor=require('../validator/formattor')

router.get('/test-me',function(req, res){
//    linkformattor.gettrim()
//    linkformattor.getlowercase()
//    linkformattor.getuppercase()

   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   const result = lodash.chunk(months , 4)
   console.log (result)

   const number = [ 1 , 3 , 5 , 7 , 9 , 11 , 13 , 15 , 17 , 19 ]
   const result1 = lodash.tail(number, 9)
   console.log(result1)

    const num1 = [ 1 , 2 , 3] 
    const num2 = [ 2 , 3 , 4]
    const num3 = [ 3 , 4 , 5]
    const num4 = [ 4 , 5 , 6]
    const num5 = [ 5 , 6 , 7]
    
    const result2 = lodash.union(num1 , num2 , num3 , num4 , num5)
    console.log(result2)

    const movie1 =  ["horror" , "The Shining"]
    const movie2 =  ["drama" , "Titanic"]
    const movie3 =  ["Thriller" , "shutter island"]
    const movie4 =  ["fantacy" , "Pans Labyrinth"]

    const result3 = lodash.fromPairs ([movie1, movie2 , movie3 , movie4])
    console.log(result3)
})

// router.get('/test-me',function(req, res){
//     linkhelper.getDate() 
//     linkhelper.getMonth()
//     linkhelper.printBatchInfo()
//     res.send('Module 2 successfully completed')
// })

// router.get('/test-me',function(req, res){
//     linkLogger.printWelcome()
//     res.send('Module 1 successfully completed')
// })




router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason