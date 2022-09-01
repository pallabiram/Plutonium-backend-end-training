

const userMid = function(req, res, next){
    let headerValue = req.headers.isfreeappuser
    if(headerValue == null)
    {
        res.send("The isFreeAppUser is mandatory.......please enter the isFreeAppUse")
    }
    else
    {
        req.isFreeAppUser = JSON.parse(headerValue)
        // console.log(req.isFreeAppUser)
        // console.log(typeof(req.isFreeAppUser))
        next() 
    }
}

module.exports.userMid = userMid