const express = require('express');
const router = express.Router();
const authorController= require("../controller/authorController")
const blogController = require("../controller/blogController")
router.get('/test-me',function(req,res){
    res.send({msg : "test done "})
})

router.post("/authors",authorController.createAuthor)

router.post('/blogs',blogController.createBlogs)

router.get('/blogs',blogController.getBlogs)
module.exports=router




