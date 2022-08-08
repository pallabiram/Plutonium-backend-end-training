const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/movies', function (req, res) {
    let movieList = ["Dhamaal", "All the best", "Chup chup ke", "Golmaal", "Hera Pheri"]
    console.log(movieList)
    res.send("Successfully Print the All Movies Name on Console")
})

router.get('/movies/:indexNumber', function (req, res) {
    let movieList = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let movieIndex = req.params.indexNumber
    if (movieIndex < movieList.length) {
        console.log([movieList[movieIndex]])
        res.send("Successfully Print the Movie Name on Console")
    }
    else {
        console.log("Please use a valid Index Number")
        res.send("Please use a valid Index Number")
    }
})

router.get('/films', function (req, res) {
    let filmObject = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Incendies"
    },
    {
        "id": 3,
        "name": "Rang de Basanti"
    },
    {
        "id": 4,
        "name": "Finding Nemo"
    }]
    console.log(filmObject)
    res.send("Successfully Print the All Films Name on Console")
})


router.get('/films/:filmId', function(req, res){
    let filmObject = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Incendies"
    },
    {
        "id": 3,
        "name": "Rang de Basanti"
    },
    {
        "id": 4,
        "name": "Finding Nemo"
    }] 

    let filmId = req.params.filmId
    if(filmId<filmObject.length)
    {
        console.log(filmObject[filmId])
        res.send("Successfully Print the Films Name on Console")
    }
    else{
        console.log("No movie exists with this id")
        res.send("No movie exists with this id")
    }
})





router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    res.send('Dummy response')
})

module.exports = router;