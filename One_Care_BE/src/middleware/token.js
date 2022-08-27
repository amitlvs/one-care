const jwt = require("jsonwebtoken");
const User = require("../model/user");

const authToken = async (req, res, next) => {
  try {
    let token;
    if (req.headers && req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
      const verifyToken = await jwt.verify(token, "helloamitkumarshubhamsahoo");
      console.log(verifyToken);
      req.user = await User.findById(verifyToken._id);

      if (verifyToken) {
        next();
      } else {
        res.status(400).json({ message: "Not authorised" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Not Authorized" });
  }
};

module.exports = authToken;
