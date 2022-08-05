const { response } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const linkLogger=require('../logger/logger')

const linkhelper=require('../util/helper')

const linkformattor=require('../validator/formattor')
router.get('/test-me',function(req, res){
   linkformattor.gettrim()
   linkformattor.getlowercase()
   linkformattor.getuppercase()

    res.send('Module 3 successfully completed')
})

router.get('/test-me',function(req, res){
    linkhelper.getDate() 
    linkhelper.getMonth()
    linkhelper.printBatchInfo()
    res.send('Module 2 successfully completed')
})

router.get('/test-me',function(req, res){
    linkLogger.printWelcome()
    res.send('Module 1 successfully completed')
})




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