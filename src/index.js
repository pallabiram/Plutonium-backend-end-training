const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require("moment")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Pallabiram:pBfYTKrTVydqp76Q@cluster0.khdhbt8.mongodb.net/Pallabiram20-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use(function (req, res, next){
    console.log("This message will print everytime when you hit the API")

    console.log(moment().format("YYYY-MM-DD HH:mm:ss") + " , " + req.ip + " , " + req.path)
    console.log()
    next()
})

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
