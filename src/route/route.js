const express = require('express');
const router = express.Router();
const authorController= require("../controller/authorController")
const blogController = require("../controller/blogController")
const auth = require ('../middleware/auth')
router.get('/test-me',function(req,res){
    res.send({msg : "test done "})
})

router.post("/authors",authorController.createAuthor)

router.post('/blogs',blogController.createBlogs)

router.get('/blogs',auth.authentication,blogController.getBlogs)

router.delete('/blogs/:blogId',auth.authentication,auth.authorisation,blogController.deleteBlogs)

router.put("/blogs/:blogId",auth.authentication,auth.authorisation,blogController.updatedBlogs)

router.delete('/blogs',auth.authentication,auth.authorisation,blogController.deleteByQuery)

router.post('/login',authorController.login)
module.exports=router




