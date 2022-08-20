const bookModel = require('../models/bookModel')

const createBookData = async function(req, res){
    let bookData = req.body
    let savedBookData = await bookModel.create(bookData)
    res.send({data: savedBookData, status: true})
}

const getBookData = async function(req, res){
    let getBookDetails = await bookModel.find()
    res.send({data: getBookDetails, status: true})
}
const booksData = async function (req, res) {
    let allBooks = await bookModel
      .find()
      .select({ bookName: 1, authorName: 1, _id: 0 });
    res.send({ msg: allBooks });
  };
  
  const getBooksInYear = async function (req, res) {
    let year = req.body.year;
    let allBooks1 = await bookModel.find({ year: year });
    res.send({ msg: allBooks1 });
  };
  
  const getparticularBOoks = async function (req, res) {
    let particularBooks = await bookModel.find(req.body);
    res.send({ msg: particularBooks });
  };
  
  const getXINRBooks = async function (req, res) {
    let indianBooks = await bookModel.find({ $in: ['100', '200', '500'] });
  
    res.send({ msg: indianBooks });
  };
  
  const getRandomBooks = async function (req, res) {
    let randomBooks = await bookModel.find({
      $or: [{ stockAvailable: true }, { totalpages: { $gt: 500 } }],
    });
    res.send({ msg: randomBooks });
  };
  

module.exports.createBookData = createBookData
module.exports.getBookData = getBookData


module.exports.booksData = booksData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getparticularBOoks = getparticularBOoks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;