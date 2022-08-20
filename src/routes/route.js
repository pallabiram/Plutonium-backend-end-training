const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel');
const bookController = require('../controllers/bookController');

router.get('/test-me', function (req, res) {
  res.send('My first ever api!');
});

router.post('/createBooks', bookController.createBooks);
router.get('/getAllBooks', bookController.getAllBooks);

router.get('/booksData', bookController.booksData);
router.get('/getBooksInYear', bookController.getBooksInYear);
router.get('/getparticularBOoks', bookController.getparticularBOoks);
router.get('/getXINRBooks', bookController.getXINRBooks);
router.get('/getRandomBooks', bookController.getRandomBooks);

router.post('/createAuthorData', authorBookControllerSession3.createAuthorData)
router.post('/createBookData', authorBookControllerSession3.createBookData)
router.post('/getBookDetails', authorBookControllerSession3.getBookDetails)
router.post('/findAuthor', authorBookControllerSession3.findAuthor)
router.post('/findBooksByPrice', authorBookControllerSession3.findBooksByPrice)

module.exports = router;
