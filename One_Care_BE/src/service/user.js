const User = require("../model/user");
module.exports.register = async (req, res, next) => {
  try {
    console.log("kajla");
    var user = new User(req.body);
    const saveUser = await user.save();
    res.json({ message: "user registered Successfully", data: saveUser });
    // let payload = { subject: saveUser._id };
    console.log("Inside the register fn.");
  } catch (err) {
    console.log(err);
  }
};
module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const verifyPassword = await user.passwordVerification(password);
      if (verifyPassword) {
        const token = await user.generateToken();
        res.status(200).json({
          message: `Hi ${user.name} you have successfully logged in.`,
          data: user,
          token: token,
          status: true,
        });
      } else {
        res.status(403).json({ message: "Email/Password Invalid." });
      }
    } else {
      res.status(404).json({ message: "Email/Password Invalid." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
