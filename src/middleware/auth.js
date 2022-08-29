
const jwt = require("jsonwebtoken")
const auth= function(req,res,next){
let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);

  let decodedToken = jwt.verify(token, "it is very secret");
  // console.log(decodedToken)
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

    let paramsUserId = req.params.userId
    let userLoggedIn = decodedToken.userId

    if (paramsUserId != userLoggedIn) {
        return res.send({ msg: "This Token is not allowed for this user ID" })
    }
    next()
}

module.exports.auth=auth