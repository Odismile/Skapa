

var { randomBytes } = require("crypto");
module.exports ={
  randomStr (length)  {
    return randomBytes(length || 54)
      .toString("base64")
      .replace(/\//gi, "*");
  }
}

