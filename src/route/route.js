const express = require('express');
const router = express.Router();
const authorController= require("../controller/authorController")
const bookController = require("../controller/blogController")
router.get('/test-me',function(req,res){
    res.send({msg : "test done "})
})

router.post("/authors",authorController.createAuthor)

router.post('/blogs',bookController.createBlogs)


module.exports=router




